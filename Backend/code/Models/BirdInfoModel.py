from db import db

class BirdInfoModel(db.Model):
    index = None
    __tablename__ = 'birds_info'
    bird_name = db.Column('bird_name', db.String(30), primary_key=True)
    bird_family = db.Column('bird_family', db.String(30))
    image_path = db.Column('image_path', db.String(300))
    bird_info = db.Column('bird_info', db.String(300))

    def __init__(self, bird_id, bird_name, bird_family, image_path, bird_info):
        self.bird_id = bird_id
        self.bird_name = bird_name
        self.bird_family = bird_family
        self.image_path = image_path
        self.bird_info = bird_info

    @classmethod
    def find_by_name(cls, bird_name):
        return cls.query.filter_by(bird_name=bird_name).first()

    @classmethod
    def find_by_id(cls, bird_id):
        return cls.query.filter_by(bird_id=bird_id).first()

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self):
        db.session.delete(self) 
        db.session.commit()

    @classmethod
    def find_by_name(cls, bird_name):
        return cls.query.filter(bird_name=bird_name).first()

    def json(self):
        return {'bird_id': self.bird_id, 'bird_name' : self.bird_name, 'bird_family' : self.bird_family,
            'image_path' : self.image_path, self.bird_info: 'self.bird_info'} 

    @classmethod
    def generate_id(cls):
        if cls.index:
            cls.index += 1
        else:
            user = cls.query.order_by(BirdInfoModel.user_id.desc()).first()
            cls.index = user.user_id + 1 if user else 1
        return cls.index