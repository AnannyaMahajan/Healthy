from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from .. import crud
from ..database import SessionLocal

router = APIRouter(prefix="/api/alerts", tags=["alerts"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/create")
def create_alert(payload: dict, db: Session = Depends(get_db)):
    title = payload.get("title","Alert")
    message = payload.get("message","")
    level = payload.get("level","info")
    alert = crud.create_alert(db, title, message, level)
    return {"status":"ok", "alert_id": alert.id}
