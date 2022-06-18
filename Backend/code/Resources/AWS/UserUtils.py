from flask_restful import Resource, reqparse
from Models.UserModel import UserModel
from Utils.logger import logger

class UserUtils(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument(
        'first_name',
        type=str,
    )
