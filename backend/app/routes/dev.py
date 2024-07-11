from typing import Optional
from fastapi import APIRouter, Query 
from models.desenvolvedores import DesenvolvedorModel, AtualizarDesenvolvedorModel
from config.config import devs_Collections
from serializers.dev import decodeDevs, decodeDev
import datetime
from bson import ObjectId
from fastapi import HTTPException

dev_root = APIRouter()

# post request

@dev_root.post("/new/dev")
def newDev(dev:DesenvolvedorModel):
    dev = dict(dev)
    existing_dev = devs_Collections.find_one({
        "$or": [
            {"github": dev["github"]},
            {"email": dev["email"]}
        ]
    })
    
    if existing_dev:
        raise HTTPException(status_code=400, detail="Desenvolvedor com esse github ou email já existe")
 
    data_atual = datetime.date.today()
    dev['data_criacao'] = str(data_atual)
    res = devs_Collections.insert_one(dev)
    return {"status": "ok", "message": "Desenvolvedor criado com sucesso", "id": str(res.inserted_id)}
    

# get desenvolvedores
@dev_root.get("/all/devs")
def allDevs(
    page: int = Query(1, description="Número da página"), 
    limit: int = Query(10, description="Limite de desenvolvedores a serem retornados por página"),
    filtro: Optional[str] = Query(None, description="Filtro para nome dos desenvolvedores")
    ):
    if page < 1:
        page = 1
    if limit < 1:
        limit = 10
    
    skip = (page - 1) * limit
    
    query = {}
    
    if filtro:
        regex = {"$regex": filtro, "$options": "i"}  # Regex para busca insensível a maiúsculas/minúsculas
        query = {
            "$or": [
                {"nome": regex},
                {"cidade": regex},
                {"profissao": regex},
                {"tecnologias": regex},
                {"avatar": regex},
                {"data_criacao": regex},
                {"github": regex},
                {"email": regex}
            ]
        }
    
    devs = devs_Collections.find(query).skip(skip).limit(limit)

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
    if dev == {}:
        raise HTTPException(status_code=400, detail="Nenhum dado foi atualizado")
    devs_Collections.find_one_and_update({"_id": ObjectId(dev_id)}, {"$set": dev})
    return {"status": "ok", "message": "Desenvolvedor atualizado com sucesso"}

#deletando devs
@dev_root.delete("/delete/dev/{dev_id}")
def deletandoDev(dev_id:str):
    try: 
        devs_Collections.find_one_and_delete({"_id": ObjectId(dev_id)})
        return {"status": "ok", "message": "Desenvolvedor deletado com sucesso", "id": dev_id}   
    except: 
        raise HTTPException(status_code=400, detail="Desenvolvedor não encontrado")