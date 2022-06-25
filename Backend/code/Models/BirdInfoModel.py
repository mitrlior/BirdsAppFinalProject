from db import db

class BirdsLocationModel(db.Model):
    index = None
    __tablename__ = 'birds_info'
    bird_id = db.Column('bird_id', db.Integer, unique=True)
    bird_name = db.Column('bird_name', db.String(30))
    bird_family = db.Column('bird_family', db.String(30))
    image_path = db.Column('image_path', db.String(300))
    bird_info = db.Column('bird_info', db.String(300))