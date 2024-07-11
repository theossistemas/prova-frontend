from fastapi import FastAPI
from routes.entry import entry_root
from routes.dev import dev_root
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


origins = [
    "http://localhost",
    "http://localhost:8000",
    "http://localhost:4200",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  
    allow_credentials=True,
    allow_methods=["*"], 
    allow_headers=["*"],  
)

app.include_router(entry_root)
app.include_router(dev_root)