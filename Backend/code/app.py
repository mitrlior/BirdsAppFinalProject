import os
from flask import Flask
from flask import request
from flask_restful import Api
from flask_jwt import JWT
import psycopg2
from dotenv import load_dotenv
# from Resources.AWS.BirdBucket import connect_to_s3
from Utils.logger import logger

from Resources.UserResource import UserResource
from Resources.BirdResource import BirdResource
load_dotenv()

logger.info(os.environ.get('name'))
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get(
    'DATABASE_URL_', 'sqlite:///data.db'
)

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['S3_KEY'] =  os.environ.get('S3_KEY')
app.config['S3_SECRET'] = os.environ.get('S3_SECRET')
app.config['S3_LOCATION'] = os.environ.get('S3_LOCATION')

api = Api(app)


@app.route('/')
def home_page():
    logger.debug(f'{request.remote_addr}')
    return {'message': 'Home page'}, 200


api.add_resource(BirdResource, '/bird/<string:file_name>')
api.add_resource(UserResource, '/user/<string:username>')

if __name__ == '__main__':
    from db import db

    db.init_app(app)
    # connect_to_s3()
    app.run(port=5000, debug=True, load_dotenv=True)
