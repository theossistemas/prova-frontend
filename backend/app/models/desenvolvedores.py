from typing import Optional

from pydantic import BaseModel, EmailStr, Field

class DesenvolvedorModel(BaseModel):
    nome: str
    email: EmailStr
    cidade: str
    profissao: str
    tecnologias: str
    avatar: str
    github: str

class AtualizarDesenvolvedorModel(BaseModel):
    nome: Optional[str] = None
    email: Optional[EmailStr] = None
    cidade: Optional[str] = None
    profissao: Optional[str] = None
    tecnologias: Optional[str] = None
    avatar: Optional[str] = None
    github: Optional[str] = None
 

