# Dummy prediction pipeline to simulate outbreak prediction.
import random
from typing import Dict

def predict_outbreak(symptom_reports: list, water_reports: list) -> Dict:
    """
    Returns a risk score 0..1 and a label.
    For hackathon, use a simple heuristic:
      - more symptoms -> higher risk
      - bad pH/turbidity/bacteria -> higher risk
    """
    score = 0.0

    # symptoms influence
    symptom_count = len(symptom_reports)
    score += min(0.6, 0.02 * symptom_count)  # up to 0.6

    # water quality influence
    for w in water_reports:
        ph = w.get("pH")
        turb = w.get("turbidity")
        bact = w.get("bacteria_count")
        if ph is not None:
            if ph < 6.5 or ph > 8.5:
                score += 0.1
        if turb is not None and turb > 5:
            score += 0.1
        if bact is not None and bact > 50:
            score += 0.1

    # small random boost to simulate model uncertainty
    score += random.uniform(0, 0.1)
    score = min(1.0, score)
    label = "low"
    if score > 0.6:
        label = "high"
    elif score > 0.3:
        label = "medium"

    return {
        "risk_score": round(score, 3),
        "risk_label": label,
        "details": {
            "symptom_reports": symptom_count,
            "water_samples": len(water_reports)
        }
    }
