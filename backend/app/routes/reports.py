from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from .. import crud, schemas
from ..database import SessionLocal, engine
from fastapi import status

router = APIRouter(prefix="/api/reports", tags=["reports"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/", status_code=status.HTTP_201_CREATED)
def submit_report(report: schemas.SymptomReportCreate, db: Session = Depends(get_db)):
    item = crud.create_symptom_report(db, report)
    return {"status":"ok","report_id": item.id}
