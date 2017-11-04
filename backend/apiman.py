import requests

class ApiMan():
    GET = 0 # list or info
    POST = 1 # create
    DELETE = 2 # delete
    PATCH = 3 # edit

    def __init__(self):
        self.queue = {}
        self.apis = {}
        self.seq = 0
        self.done_seq = -1

    def register_api(self, name, action, api, method, args):
        self.apis[name + "_" + action] = {
            "name": name,
            "action": action,
            "api": api,
            "method": method,
            "args": args,
        }

    def call(self, name, action, callback=None):
        # prepare async action
        seq = self.seq
        self.seq += 1
        self.queue[seq] = {
            "seq": seq,
            "name": name,
            "action": action,
            "finished": False,
            "ret": None,
            "callback": callback,
        }
        return seq

    def do(self, seq):


    def query(self, seq):
        return self.queue[seq]

    def eventloop(self):
