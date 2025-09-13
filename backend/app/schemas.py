from pydantic import BaseModel
from typing import Optional

class SymptomReportCreate(BaseModel):
    name: Optional[str]
    age: Optional[int]
    phone: Optional[str]
    location: str
    symptoms: str
    language: Optional[str] = "en"

class WaterReportCreate(BaseModel):
    source_name: str
    pH: Optional[float] = None
    turbidity: Optional[float] = None
    bacteria_count: Optional[int] = None
    location: str

class PredictionResponse(BaseModel):
    risk_score: float
    risk_label: str
    details: dict
