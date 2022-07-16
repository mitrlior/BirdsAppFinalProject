from flask_restful import Resource, reqparse
from flask import request

from Resources.AWS.Bucket import Bucket
from Utils.logger import logger
import werkzeug

from Models.BirdInfoModel import BirdInfoModel


# from AWS.Bucket import Bucket
class BirdInfoResource(Resource):
    parser = reqparse.RequestParser()

    parser.add_argument(
        'bird_info',
        type=str,
        required=False
    )

    @staticmethod
    def get(bird_name):
        bird = BirdInfoModel.find_by_name(bird_name)
        if bird:
            return bird.json()
        else:
            return {'message': f'Bird named {bird_name} does not exists'}

    @staticmethod
    def post(bird_name):
        if BirdInfoModel.find_by_bird_name(bird_name):
            return {'message': 'Bird with this name already exists'}

        data = BirdInfoModel.parser.parse_args()

        if 'bird_name' not in data or data['bird_name'] is None:
            return {'message': 'You must fill the bird_info filed'}

        if 'bird_info' not in data or data['bird_info'] is None:
            return {'message': 'You must fill the bird_info filed'}

        if 'file' not in data or data['file'] is None:
            return {'message': 'You must add a photo filed'}

        _id = BirdInfoModel.generate_id()
        raw_data = request.get_data()
        img_path = Bucket.put_to_s3(bird_name, raw_data)

        bird = BirdInfoModel(_id, bird_name, img_path)

        try:
            bird.save_to_db()
            logger.debug(f'Added user : {bird.json}')
        except:
            return {
                       'message': 'An error occurred adding the new bird.'
                   }, 500

        return bird.json(), 201

    @staticmethod
    def delete(bird_name):
        if bird_name:
            bird = BirdInfoModel.findb(bird_name)
            if bird:
                bird.delete_from_db()
                return {'message': 'Bird deleted from db'}
            return {
                'message': 'No such bird exists with this name'
            }
