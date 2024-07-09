
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

uri = "mongodb+srv://raphacarmo95:raphaTeste123@pymongo.pfzkma8.mongodb.net/?retryWrites=true&w=majority&appName=Pymongo"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

db = client.desenvolvedores 

devs_Collections = db['Desenvolvedores']

# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)