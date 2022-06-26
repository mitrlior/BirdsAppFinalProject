from db import db
from sqlalchemy import asc

class BirdWaitingToRecognizeModel(db.Model):
    index = None
    __tablename__ = 'birds_waiting_to_recognize'
    id = db.Column('id', db.Integer, unique=True)
    image_path = db.Column('image_path', db.String(300))
    lat = db.Column('lat', db.Float(precision=10, decimal_return_scale=None))
    lng = db.Column('lng', db.Float(precision=10, decimal_return_scale=None))
    user_id_image = db.Column('user_id', db.String)


    def __init__(self,id , image_path, lat, lng, user_id):
        self.id = id
        self.image_path = image_path
        self.lat = lat
        self.lng = lng
        self.user_id = user_id

    @classmethod
    def get_all_images_by_user_id(cls, user_id):
        return cls.query.filter_by(user_id=user_id)

    @classmethod
    def get_next_image(cls):
        return cls.query.order_by(id).order_by(asc(id))