from flask import request
from flask_restful import Resource, reqparse
from Utils.logger import logger
import werkzeug
from dotenv import load_dotenv
from Resources.AWS.Bucket import Bucket
from flask import send_file
import io


class BirdResource(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument(
        'bird_name',
        type=str,
        required=True,
        help='bird_name field cannot be blank',
    )

    parser.add_argument('file',
                    type=werkzeug.datastructures.FileStorage,
                    location='files',
                    required=True,
                    help='provide a file')

    def get(self, file_name):
        img = Bucket.get_bird_from_s3(file_name)
        return send_file(
            io.BytesIO(img),
            mimetype='image/jpeg')

    def post(self, file_name):
        raw_data = request.get_data()
        # print(raw_data)
        response = Bucket.put_to_s3(file_name, raw_data)