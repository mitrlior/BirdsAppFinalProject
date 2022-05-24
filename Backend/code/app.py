import os
from flask import Flask
from flask import request
from flask_restful import Api
from flask_jwt import JWT
import psycopg2
from flask_restful_swagger import swagger

from Utils.logger import logger

from Resources.UserResource import UserResource
from Resources.BirdResource import BirdResource

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get(
    'DATABASE_URL_', 'sqlite:///data.db'
)

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# app.secret_key = 'jose'
api = Api(app)


@app.route('/')
def home_page():
    logger.debug(f'{request.remote_addr}')
    return {'message': 'Home page'}, 200


api.add_resource(BirdResource, '/bird')
api.add_resource(UserResource, '/user/<string:username>')

if __name__ == '__main__':
    from db import db

    db.init_app(app)
    app.run(port=5000, debug=True)
