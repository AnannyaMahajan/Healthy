from sqlalchemy import Column, Integer, String, Float, DateTime, JSON, Boolean
from datetime import datetime
from .database import Base

class SymptomReport(Base):
    __tablename__ = "symptom_reports"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=True)
    age = Column(Integer, nullable=True)
    phone = Column(String, nullable=True)
    location = Column(String, nullable=False)
    symptoms = Column(String, nullable=False)
    reported_at = Column(DateTime, default=datetime.utcnow)
    language = Column(String, default="en")

class WaterReport(Base):
    __tablename__ = "water_reports"
    id = Column(Integer, primary_key=True, index=True)
    source_name = Column(String, nullable=False)
    pH = Column(Float, nullable=True)
    turbidity = Column(Float, nullable=True)
    bacteria_count = Column(Integer, nullable=True)
    location = Column(String, nullable=False)
    reported_at = Column(DateTime, default=datetime.utcnow)

class Alert(Base):
    __tablename__ = "alerts"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    message = Column(String, nullable=False)
    level = Column(String, default="info")  # info/warning/critical
    created_at = Column(DateTime, default=datetime.utcnow)
    sent = Column(Boolean, default=False)
