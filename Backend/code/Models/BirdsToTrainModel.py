from db import db

class BirdsToTrainModel(db.Model):
    index = None
    __tablename__ = 'birds_to_train'
    bird_id = db.Column('bird_id', db.Integer, unique=True)
    bird_name = db.Column('bird_name', db.String(30))
    bird_family = db.Column('bird_family', db.String(30))
    image_path = db.Column('image_path', db.String(300))
    user_id_image = db.Column('user_id', db.Integer)
    user_id_bw = db.Column('user_id_bw', db.String)

    def __init__(self, bird_id, bird_name, bird_family, image_path, user_id, user_id_bw):
        self.bird_id = bird_id
        self.bird_name = bird_name
        self.bird_family = bird_family
        self.image_path = image_path
        self.user_id = user_id
        self.user_id_bw = user_id_bw

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
            user = cls.query.order_by(BirdsToTrainModel.user_id.desc()).first()
            cls.index = user.user_id + 1 if user else 1
        return cls.index