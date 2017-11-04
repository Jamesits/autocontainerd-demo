import config
from db_schema import *
import requests
import hug
import pprint

pp = pprint.PrettyPrinter(indent=4)

@hug.get()
def ping():
    """return status"""
    print("Requesting backend status...")
    ret = {
        "api_server": 1,
        "backend_server": 0,
    }
    try:
        r = requests.get(config.api_endpoint + "/info")
        ret["backend_server"] = 1
        ret["backend_info"] = r.json()
    except requests.exceptions.Timeout:
        print("Backend request timed out!")

    pp.pprint(ret)
    return ret

@hug.get()
def images():
    ret = requests.get(config.api_endpoint + "/images/get")
    pp.pprint(ret)
    return ret or {}

@hug.post()
def images(name):
    ret = requests.post(config.api_endpoint + "/image/create", data={
        "imageName": name
    })
    pp.pprint(ret)
    return ret or {}