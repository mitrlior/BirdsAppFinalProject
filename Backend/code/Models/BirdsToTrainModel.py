from db import db
from Resources.AWS.Bucket import Bucket


class BirdsToTrainModel(db.Model):
    index = None
    __tablename__ = 'birds_to_train'
    bird_id = db.Column('bird_id', db.Integer, primary_key=True)
    bird_name = db.Column('bird_name', db.String(30))
    user_id_image = db.Column('user_id', db.Integer)  # Took the photo
    isApproved = db.Column('isApproved', db.Boolean)  # If a bird watcher approved the algorithm
    lat = db.Column('lat', db.Float(precision=10, decimal_return_scale=None))
    lng = db.Column('lng', db.Float(precision=10, decimal_return_scale=None))

    # TODO: add date the photo taken, after approved, update the birdsLocation

    def __init__(self, bird_id, bird_name, user_id, lat, lng):
        self.bird_id = bird_id
        self.bird_name = bird_name
        self.user_id = user_id
        self.lat = lat
        self.lng = lng

    @classmethod
    def find_by_id(cls, bird_id):
        return cls.query.filter_by(bird_id=bird_id).first()

    @classmethod
    def get_all_birds_to_train(cls):
        return cls.query.all()

    @classmethod
    def find_by_bird_name(cls, bird_name):
        return cls.query.filter_by(bird_name=bird_name).first()

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self):
        db.session.delete(self)
        db.session.commit()

    @classmethod
    def generate_id(cls):
        if cls.index:
            cls.index += 1
        else:
            user = cls.query.order_by(BirdsToTrainModel.bird_id.desc()).first()
            cls.index = user.user_id + 1 if user else 1
        return cls.index

    @classmethod
    def get_bird_to_define(cls):
        try:
            bird_id = cls.query().filter_by(BirdsToTrainModel.isApproved is False).first()
            if bird_id:
                return bird_id
            else:
                return {'message': 'There is no birds to define.'}, 400

        except:
            return {'message': 'Failed to get birds to define'}, 500
