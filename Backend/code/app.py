from flask import Flask
from flask_restful import Api
from flask_jwt import JWT

from Resources.BirdResource import BirdResource

app = Flask(__name__)
# app.secret_key = 'jose'
api = Api(app)

api.add_resource(BirdResource, '/bird')

if __name__ == '__main__':
    app.run(port=5000, debug=True)
