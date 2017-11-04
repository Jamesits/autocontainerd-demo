class Pool:
    def __init__(self):
        self.userset = None
        self.admin = None
        self.pods = []
        self.displayname = "Unnamed Pool"

class UserSet:
    def __init__(self):
        self.admin = None
        self.users = []
        self.displayname = "Unnamed UserSet"

class User:
    def __init__(self, id):
        self.display_name = "Unnamed User"

class Pod:
    def __init__(self):
        self.display_name = "Unnamed Pod"
        self.containers = []

class Container:
    def __init__(self):
        self.display_name = "Unnamed Container"