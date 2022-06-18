from cv2 import log
from flask_restful import Resource, reqparse
from Models.UserModel import UserModel
from Utils.logger import logger

class UserLoginResource(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument(
        'password',
        type=str,
        required=True,
        help='Password filed cannot be blank'
    )

    def post(self, username):
        user = UserModel.find_by_username(username)
        print(user)
        data = UserLoginResource.parser.parse_args()
        if user:
            if user.password == data['password']:
                logger.info(f'User {username} logged in')
                return  200
        else:
            logger.info(f'Failed to login to user {username}')
            return {'message': 'User cannot be found'}, 403


