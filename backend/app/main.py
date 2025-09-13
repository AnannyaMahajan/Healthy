from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .database import engine, Base
from .routes import reports, water, predict, alerts
from . import models

Base.metadata.create_all(bind=engine)

app = FastAPI(title="SmartHealth Backend", version="1.0")

# allow frontend dev origin
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000", "*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(reports.router)
app.include_router(water.router)
app.include_router(predict.router)
app.include_router(alerts.router)

@app.get("/")
def root():
    return {"message":"SmartHealth API running"}
