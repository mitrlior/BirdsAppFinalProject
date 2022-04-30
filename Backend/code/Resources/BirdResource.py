from flask_restful import Resource


class BirdResource(Resource):
    def get(self):
        return {'message': "Hello world"}
