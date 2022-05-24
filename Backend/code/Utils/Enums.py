from enum import Enum, auto


class USER_TYPE(Enum):
    USER = auto()
    BIRD_WATCHER = auto()
    ADMIN = auto()
    
    @classmethod
    def contains(cls, type):
        return type in [v.value for v in cls.__members__.values()]

