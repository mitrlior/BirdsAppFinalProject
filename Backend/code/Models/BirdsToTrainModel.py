from db import db

class BirdsToTrainModel(db.Model):
    index = None
    __tablename__ = 'birds_to_train'
    bird_id = db.Column('bird_id', db.Integer, unique=True)
    bird_name = db.Column('bird_name', db.String(30))
    bird_family = db.Column('bird_family', db.String(30))
    image_path = db.Column('image_path', db.String(300))
    user_id_image = db.Column('user_id', db.Integer)
    user_id_image = db.Column('user_id', db.Integer)
    user_id_bw = db.Column('user_id', db.String)