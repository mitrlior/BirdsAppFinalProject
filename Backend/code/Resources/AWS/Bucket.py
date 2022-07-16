import io
import os
import pathlib

import boto3
import cv2
import requests
from PIL import Image
from Utils.logger import logger

from dotenv import load_dotenv

# from dotenv import load_dotenv

bucket_url = os.getenv('BUCKET_URL')


class Bucket:
    # load_dotenv()
    BASE_DIR = pathlib.Path(__file__).parent.resolve()
    AWS_REGION = os.environ.get('AWS_REGION')
    BUCKET_NAME = os.environ.get('BUCKET_NAME')
    KEY = os.environ.get('S3_KEY')
    s3 = boto3.resource("s3", verify=False)

    @staticmethod
    def get_bird_from_s3(filename):
        print(filename)
        path = bucket_url + filename
        img = requests.get(path, allow_redirects=True).content
        print(type(img))
        return img

    @staticmethod
    def put_to_s3(filename, img):
        try:
            image = Image.open(io.BytesIO(img))
            image.save(filename)
            print(type(image))
            content_type = 'image/jpeg'
            headers = {'content-type': content_type}
            file = cv2.imread(filename)

            # Encode image
            _, img_encoded = cv2.imencode('.jpeg', file)
            # logger.log(bucket_url, filename)
            url = str(bucket_url) + str(filename)
            requests.put(url, data=img_encoded.tostring(), headers=headers)
            os.remove(filename)
        except Exception as e:
            e.print_exc()
            return {'message': 'Failed to upload image'}
        return url
