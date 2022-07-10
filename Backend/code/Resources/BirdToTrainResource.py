from flask_restful import Resource, reqparse

from Models.BirdsToTrainModel import BirdsToTrainModel
from Utils.logger import logger


class BirdToTrainResource(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument(
        'image_id',
        type=str,
        help='image_path is missing.'
    )

    parser.add_argument(
        'user_id',
        type=int,
        help='You must get user_id'
    )

    parser.add_argument(
        'lat',
        type=float,
        help='You must get your location')

    parser.add_argument(
        'lng',
        type=float,
        help='You must get your location')

    @staticmethod
    def post():
        data = BirdToTrainResource.parser.parse_args()
        if data['image_id'] is None:
            return {'message': 'image_id is is missing.'}, 400

        if data['user_id'] is None:
            return {'message': 'user_id is missing.'}, 400

        if data['lat'] is None:
            return {'message': 'Location is missing.'}

        if data['lng'] is None:
            return {'message': 'Location is missing.'}

        try:
            image_id = BirdsToTrainModel.generate_id()
            birds_to_train_model = BirdsToTrainModel(image_id, 'Undefined', data['user_id'], data['lat'],
                                                     data['lng'])
            return {'message': 'Bird added successfully'}, 201

        except:
            logger.log('Failed to save bird')

    @staticmethod
    def update():
        data = BirdToTrainResource.parser.parse_args()

        if data['image_id'] is None:
            return {'message': 'image_id is is missing.'}, 400

        if data['bird_name'] is None:
            return {'message': 'bird_name cannot be empty.'}, 400

        try:
            bird_model = BirdsToTrainModel.find_by_id(data['name'])
            if bird_model:
                bird_model.bird_name = data['bird_name']
                bird_model.save_to_db()

            else:
                return {'message': 'Bird cannot be found.'}

        except Exception:
            return {'message': 'Failed to update birds type.'}, 500
