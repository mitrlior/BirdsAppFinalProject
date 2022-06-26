import boto3, botocore
import os
import pathlib
import requests
import io
from PIL import Image, ImageDraw
import cv2

# from dotenv import load_dotenv

class Bucket():
    # load_dotenv()
    BASE_DIR = pathlib.Path(__file__).parent.resolve()
    AWS_REGION = os.environ.get('AWS_REGION')
    BUCKET_NAME = os.environ.get('BUCKET_NAME')
    KEY = os.environ.get('S3_KEY')
    s3 = boto3.resource("s3", verify=False)

    def get_bird_from_s3(filename):
        print(filename)
        img = requests.get(f'https://mbmvxghuo0.execute-api.eu-central-1.amazonaws.com/dev/final-project-birds/{filename}', allow_redirects=True).content
        print(type(img))
        return img

    def put_to_s3(filename, img):
        image = Image.open(io.BytesIO(img))
        image.save(filename)
        print(type(image))
        content_type = 'image/jpeg'
        headers = {'content-type': content_type}
        file = cv2.imread(filename)
        # Encode image
        _, img_encoded = cv2.imencode('.jpeg', file)
        url = f'https://mbmvxghuo0.execute-api.eu-central-1.amazonaws.com/dev/final-project-birds/{filename}'
        requests.put(url, data=img_encoded.tostring(), headers=headers)
        os.remove(filename)
        return url
