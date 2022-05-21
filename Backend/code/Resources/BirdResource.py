from flask_restful import Resource
from Utils.logger import logger

class BirdResource(Resource):
    def get(self):
        print("get bird")
        logger.debug('Get bird')
        return {'message': "Hello world"}
