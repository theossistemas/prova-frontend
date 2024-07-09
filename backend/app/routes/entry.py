from fastapi import APIRouter

entry_root = APIRouter()

@entry_root.get("/")
async def read_root():
    return {"message": "API esta no ar!"}