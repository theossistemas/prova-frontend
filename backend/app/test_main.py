import sys
import os
from fastapi.testclient import TestClient

sys.path.append(os.path.dirname(os.path.abspath(__file__)) + '/')

from server.app import app

client = TestClient(app)

def test_criacao():
    response = client.post(
        "/new/dev",
        headers={"X-Token": "coneofsilence"},
        json={
        "nome": "string",
        "email": "user@example.com",
        "cidade": "string",
        "profissao": "string",
        "tecnologias": "string",
        "avatar": "string",
        "github": "string"
        }
    )
    assert response.status_code == 200
    data = response.json()
    if "id" in data:
        del data["id"]
                
    esperado ={
        "status": "ok",
        "message": "Desenvolvedor criado com sucesso",
        
    }
    assert data == esperado
    
def test_criacao_repetida():
    response = client.post(
        "/new/dev",
        headers={"X-Token": "coneofsilence"},
        json={
        "nome": "string",
        "email": "user@example.com",
        "cidade": "string",
        "profissao": "string",
        "tecnologias": "string",
        "avatar": "string",
        "github": "string"
        }
    )
    
    assert response.status_code == 400
    data = response.json()
                
    esperado ={
        "detail": "Desenvolvedor com esse github ou email já existe",
        
    }
    assert data == esperado
    
def test_criacao_errado():
    response = client.post(
        "/new/dev",
        headers={"X-Token": "coneofsilence"},
        json={
        "nome": "string",
        "email": "user@example.com",
        "cidade": "string",
        "profissao": "string",
        "tecnologias": "string",
        "avatar": "string",
        "github1": "string"
        }
    )
    
    assert response.status_code == 422


def teste_leitura():
    response = client.get("/all/devs?filtro=user@example.com", headers={"X-Token": "coneofsilence"})
    assert response.status_code == 200
    data = response.json()
    
    for dev in data:
        for dev_info in dev:
            if "_id" in dev_info:
                del dev_info["_id"]
            if "data_criacao" in dev_info:
                del dev_info["data_criacao"]
                

    esperado = [
        [
            {
                "nome": "string",
                "cidade": "string",
                "profissao": "string",
                "tecnologias": "string",
                "avatar": "string",
                "github": "string",
                "email": "user@example.com",
            }
        ]
    ]

    assert data == esperado
    
    
def teste_edicao():
    response_leitura = client.get("/all/devs?filtro=user@example.com", headers={"X-Token": "coneofsilence"})
    data_leitura = response_leitura.json()

    for dev in data_leitura:
        for dev_info in dev:
            if "_id" in dev_info:
               id_para_edicao = dev_info["_id"]
               
    response = client.put(
        f"/update/dev/{id_para_edicao}",
        headers={"X-Token": "coneofsilence"},
        json={
            "nome": "stringAtualizado"
            }
        )
    assert response.status_code == 200
    data = response.json()
    
    esperado ={
        "status": "ok",
        "message": "Desenvolvedor atualizado com sucesso",
        
    }
    
    assert data == esperado
    
    
def teste_edicao_errado():
    response_leitura = client.get("/all/devs?filtro=user@example.com", headers={"X-Token": "coneofsilence"})
    data_leitura = response_leitura.json()

    for dev in data_leitura:
        for dev_info in dev:
            if "_id" in dev_info:
               id_para_edicao = dev_info["_id"]
               
    response = client.put(
        f"/update/dev/{id_para_edicao}",
        headers={"X-Token": "coneofsilence"},
        json={
            "nome1": "stringAtualizado",
            }
        )
    esperado = {
        "detail": "Nenhum dado foi atualizado",
    }
    
    assert response.status_code == 400
    assert response.json() == esperado

def teste_delecao():
    response_leitura = client.get("/all/devs?filtro=user@example.com", headers={"X-Token": "coneofsilence"})
    data_leitura = response_leitura.json()

    for dev in data_leitura:
        for dev_info in dev:
            if "_id" in dev_info:
               id_para_delecao = dev_info["_id"]
               
    response = client.delete(f"/delete/dev/{id_para_delecao}", headers={"X-Token": "coneofsilence"})
    assert response.status_code == 200
    data = response.json()
    if "id" in data:
        del data["id"]
        
    esperado ={
        "status": "ok",
        "message": "Desenvolvedor deletado com sucesso",
    }
    
    assert data == esperado
    
def teste_delecao_errado():
    response = client.delete(f"/delete/dev/1", headers={"X-Token": "coneofsilence"})
    assert response.status_code == 400
    data = response.json()
    
    esperado ={
        "detail": "Desenvolvedor não encontrado",
    }
    
    assert data == esperado