from db import db


class BirdInfoModel(db.Model):
    index = None
    __tablename__ = 'bird_info'
    bird_name = db.Column('bird_name', db.String(30), primary_key=True)
    bird_info = db.Column('bird_info', db.String(300))

    def __init__(self, bird_name, bird_info):
        self.bird_name = bird_name
        self.bird_info = bird_info

    @classmethod
    def find_by_bird_name(cls, bird_name):
        return cls.query.filter_by(bird_name=bird_name).first()

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self):
        db.session.delete(self)
        db.session.commit()

    def json(self):
        return {'bird_name': self.bird_name, 'self.bird_info': self.bird_info}