
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

# caso não queira usar o docker, descomente a linha abaixo e comente a linha 8
# uri = "mongodb+srv://raphacarmo95:raphaTeste123@pymongo.pfzkma8.mongodb.net/?retryWrites=true&w=majority&appName=Pymongo"

uri = "mongodb://root:example@localhost:27017/"

client = MongoClient(uri)

db = client.desenvolvedores 

devs_Collections = db['Desenvolvedores']

try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)