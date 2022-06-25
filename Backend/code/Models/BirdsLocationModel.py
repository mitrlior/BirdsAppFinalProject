from db import db

class BirdsLocationModel(db.Model):
    index = None
    __tablename__ = 'birds_location'
    bird_id = db.Column('bird_id', db.Integer)
    bird_name = db.Column('bird_name', db.String(30))
    bird_family = db.Column('bird_family', db.String(30))
    image_path = db.Column('image_path', db.String(300))
    lat = db.Column('lat', db.Float(precision=10, decimal_return_scale=None))
    lng = db.Column('lng', db.Float(precision=10, decimal_return_scale=None))