from fastapi import APIRouter 
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
def allDevs():
    devs = devs_Collections.find()
    decoded_data = decodeDevs(devs)
    return {"status": "ok", "data": decoded_data}

@dev_root.get("/dev/{dev_id}")
def getDev(dev_id:str):
    dev = devs_Collections.find_one({"_id": dev_id})
    decoded_data = decodeDev(dev)
    return {"status": "ok", "data": decoded_data}

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
    return {"status": "ok", "message": "Desenvolvedor deletado com sucesso"}