from fastapi import APIRouter, Query 
from models.desenvolvedores import DesenvolvedorModel, AtualizarDesenvolvedorModel
from config.config import devs_Collections
from serializers.dev import decodeDevs, decodeDev
import datetime
from bson import ObjectId

dev_root = APIRouter()

# post request

@dev_root.post("/new/dev")
def newDev(dev:DesenvolvedorModel):
    dev = dict(dev)
    data_atual = datetime.date.today()
    dev['data_criacao'] = str(data_atual)
    res = devs_Collections.insert_one(dev)
    return {"status": "ok", "message": "Desenvolvedor criado com sucesso", "id": str(res.inserted_id)}
    

# get desenvolvedores
@dev_root.get("/all/devs")
def allDevs(page: int = Query(1, description="Número da página"), limit: int = Query(10, description="Limite de desenvolvedores a serem retornados por página")):
    if page < 1:
        page = 1
    if limit < 1:
        limit = 10
    
    skip = (page - 1) * limit
    
    devs = devs_Collections.find().skip(skip).limit(limit)

    decoded_data = decodeDevs(devs)
    return [decoded_data]

@dev_root.get("/dev/{_id}")
def Getblog(_id:str) :
    res = devs_Collections.find_one({"_id" : ObjectId(_id) }) 
    decoded_dev = decodeDev(res)
    return decoded_dev

# atualizando devs
@dev_root.put("/update/dev/{dev_id}")
def atualizandoDev(dev_id:str, dev:AtualizarDesenvolvedorModel):
    dev = dev.dict(exclude_unset=True)
    devs_Collections.find_one_and_update({"_id": ObjectId(dev_id)}, {"$set": dev})
    return {"status": "ok", "message": "Desenvolvedor atualizado com sucesso"}

#deletando devs
@dev_root.delete("/delete/dev/{dev_id}")
def deletandoDev(dev_id:str):
    devs_Collections.find_one_and_delete({"_id": ObjectId(dev_id)})
    return {"status": "ok", "message": dev_id}