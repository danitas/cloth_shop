import motor.motor_asyncio
from decouple import config

MONGO_URI = config("MONGO_URI")
client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_URI)
db = client.cloth_shop