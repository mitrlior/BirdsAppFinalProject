from flask_restful import Resource, reqparse

from Models.UserModel import UserModel

class UserResource(Resource):

    parser = reqparse.RequestParser()
    parser.add_argument(
        'first_name', type=str, required=True,
        help='firstname field cannot be blank',
    )

    parser.add_argument(
        'last_name', type=str, required=True,
        help='lastName field cannot be blank',
    )

    parser.add_argument(
        'email', type=str, required=True,
        help='email field cannot be blank',
    )

    parser.add_argument(
        'password', type=str, required=True,
        help='password field cannot be blank',
    )

    def get(self, username):
        print(f'get user {username}')
        userModel = UserModel.find_by_username(username)
        if userModel:
            return userModel.json()
        else:
            return {'message' : 'No such User exists'}

    def post(self, username):
        if UserModel.find_by_username(username):
            return {'message' : 'User already exists'}, 400
        data = UserResource.parser.parse_args()
        # Check if email is given and not taken
        if 'email' in data:
            if UserModel.find_by_email(email=data['email']):
                return {'message' : 'Email is allready taken'}, 400
        else:
            return {'message' : 'email is a required filed'}, 400
        if not 'first_name' in data:
            return {'message' : 'first_name is a required filed'}, 400

        if not 'last_name' in data:
            return {'message' : 'last_name is a required filed'}, 400
        
        if not 'password' in data:
            return {'message' : 'password is a required filed'}, 400
        
        user_id = UserModel.generate_id()
        userModel = UserModel(user_id, username, **data)
        try:
            userModel.save_to_db()
        except:
            return {
                'message' : 'An error occurred adding the new user.'
            }, 500
        return userModel.json()
        
    
    def delete(self, username):
        if username:
            user = UserModel.find_by_username(username)
            if user:
                user.delete_from_db()
                return {'message':'User deleted from db'}
            return {'message' : 'No such User exists with this username'}
            
        
    def put(self, username):
        userModel = UserModel.find_by_username(username)
        if userModel:
            data = UserResource.parser.parse_args()
            if 'first_name' in data:
                UserModel.first_name = data['firstName']

            if 'lastName' in data:
                UserModel.lastName = data['lastName']

            if 'email' in data:
                if UserModel.find_by_email(data['email']):
                    return {'message' :'email allready taken'}
                else:
                    userModel = UserModel.find_by_email(data['email'])
                userModel.email = data['email']
            
            if 'password' in data:
                userModel.password = data['password']
            
            userModel.save_to_db()
        return userModel.json()