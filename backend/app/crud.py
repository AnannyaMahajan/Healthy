from sqlalchemy.orm import Session
from . import models, schemas
from datetime import datetime

def create_symptom_report(db: Session, report: schemas.SymptomReportCreate):
    db_item = models.SymptomReport(
        name=report.name,
        age=report.age,
        phone=report.phone,
        location=report.location,
        symptoms=report.symptoms,
        language=report.language
    )
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item

def create_water_report(db: Session, report: schemas.WaterReportCreate):
    db_item = models.WaterReport(
        source_name=report.source_name,
        pH=report.pH,
        turbidity=report.turbidity,
        bacteria_count=report.bacteria_count,
        location=report.location
    )
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item

def get_recent_reports(db: Session, limit: int = 50):
    return db.query(models.SymptomReport).order_by(models.SymptomReport.reported_at.desc()).limit(limit).all()

def get_recent_water_reports(db: Session, limit: int = 50):
    return db.query(models.WaterReport).order_by(models.WaterReport.reported_at.desc()).limit(limit).all()

def create_alert(db: Session, title: str, message: str, level: str = "info"):
    alert = models.Alert(title=title, message=message, level=level)
    db.add(alert)
    db.commit()
    db.refresh(alert)
    return alert
