from db import db

class BirdWaitingToRecognizeModel(db.Model):
    index = None
    __tablename__ = 'birds_waiting_to_recognize'
    id = db.Column('id', db.Integer, unique=True)
    image_path = db.Column('image_path', db.String(300))
    lat = db.Column('lat', db.Float(precision=10, decimal_return_scale=None))
    lng = db.Column('lng', db.Float(precision=10, decimal_return_scale=None))
    user_id_image = db.Column('user_id', db.String)