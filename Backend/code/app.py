import logging
import os
import sys
from flask import Flask
from flask import request
from flask_restful import Api
from flask_jwt import JWT
import psycopg2
from dotenv import load_dotenv
from Utils.logger import logger

from Resources.UserResource import UserResource
from Resources.BirdResourceToAWS import BirdResourceToAWS
from Resources.BirdInfoResource import BirdInfoResource
from Resources.UserLoginResource import UserLoginResource
from Resources.BirdToTrainResource import BirdToTrainResource

load_dotenv()

logger.info(os.environ.get('name'))
app = Flask(__name__)
app

app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('_DATABASE_URL', 'sqlite:///data.db')

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.secret_key = 'jose'

# app.config['S3_KEY'] =  os.environ.get('S3_KEY')
# app.config['S3_SECRET'] = os.environ.get('S3_SECRET')
# app.config['S3_LOCATION'] = os.environ.get('S3_LOCATION')

api = Api(app)


@app.route('/')
def home_page():
    logger.debug(f'{request.remote_addr}')
    return {'message': 'Home page'}, 200


app.logger.addHandler(logging.StreamHandler(sys.stdout))
app.logger.setLevel(logging.ERROR)

api.add_resource(BirdResourceToAWS, '/bird/<string:file_name>')  # API to AWS to birds bucket
api.add_resource(UserResource, '/user/<string:username>')  # user post, register, update
api.add_resource(UserLoginResource, '/login/<string:username>')  # login(post)
api.add_resource(BirdInfoResource, '/birdinfo/<string:bird_name>')  # Only birds info (get)
api.add_resource(BirdToTrainResource, '/newbird')  # Post and get new Birds

if __name__ == '__main__':
    from db import db

    db.init_app(app)
    # connect_to_s3()
    if app.config['DEBUG']:

        if app.config['DEBUG']:
            @app.before_first_request
            def create_table():
                db.create_all()

    app.run(port=5000, debug=True, load_dotenv=True)
