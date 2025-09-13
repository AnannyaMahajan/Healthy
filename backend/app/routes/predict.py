from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..database import SessionLocal
from .. import ai_pipeline, crud

router = APIRouter(prefix="/api/predict", tags=["predict"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/")
def predict(db: Session = Depends(get_db)):
    # fetch recent reports and water reports and pass to ai pipeline
    reports = crud.get_recent_reports(db, limit=100)
    water = crud.get_recent_water_reports(db, limit=100)

    # convert to simple dict
    symp = [{"symptoms": r.symptoms, "location": r.location} for r in reports]
    waterd = [{"pH": w.pH, "turbidity": w.turbidity, "bacteria_count": w.bacteria_count} for w in water]

    result = ai_pipeline.predict_outbreak(symp, waterd)
    return result
