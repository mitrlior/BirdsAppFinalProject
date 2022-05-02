from flask import Flask
from flask_restful import Api
from flask_jwt import JWT
import psycopg2

from Resources.BirdResource import BirdResource

app = Flask(__name__)
# app.secret_key = 'jose'
api = Api(app)

@app.route('/')
def home_page():
    return "Home Page"

api.add_resource(BirdResource, '/bird')

if __name__ == '__main__':
    from db import db

    db.init_app(app)
    app.run(port=5000, debug=True)
