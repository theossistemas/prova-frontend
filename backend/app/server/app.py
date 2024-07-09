from fastapi import FastAPI
from routes.entry import entry_root
from routes.dev import dev_root

app = FastAPI()


app.include_router(entry_root)
app.include_router(dev_root)