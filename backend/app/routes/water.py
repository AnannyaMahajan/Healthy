from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from .. import crud, schemas
from ..database import SessionLocal
from fastapi import status

router = APIRouter(prefix="/api/water", tags=["water"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/", status_code=status.HTTP_201_CREATED)
def submit_water(report: schemas.WaterReportCreate, db: Session = Depends(get_db)):
    item = crud.create_water_report(db, report)
    return {"status":"ok","water_report_id": item.id}

@router.get("/", status_code=status.HTTP_200_OK)
def list_water(db: Session = Depends(get_db)):
    return crud.get_recent_water_reports(db)
