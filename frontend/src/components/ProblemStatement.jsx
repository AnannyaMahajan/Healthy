import React from "react";

export default function ProblemStatement(){
  return (
    <section className="mt-12">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="col-span-2 bg-white rounded-2xl shadow p-6 border-l-8 border-primary">
          <h3 className="text-2xl font-semibold text-primary mb-3">Problem Statement</h3>
          <p className="text-gray-700 mb-4">
            Develop a Smart Health Surveillance & Early Warning System that detects, monitors and helps prevent water-borne disease outbreaks in remote communities.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Collect health data from clinics, ASHA workers, volunteers via mobile/SMS.</li>
            <li>AI/ML to detect patterns & predict outbreaks using symptoms, water reports & seasonal trends.</li>
            <li>Integrate low-cost IoT water sensors or manual test kits.</li>
            <li>Real-time alerts to district health officials and local governance bodies.</li>
            <li>Multilingual mobile interface with offline support.</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 border-l-8 border-accent">
          <h3 className="text-xl font-semibold text-accent mb-3">Background</h3>
          <p className="text-gray-700">
            Water-borne diseases (diarrhea, cholera, typhoid, hepatitis A) spike during monsoon in NER due to contaminated sources, poor sanitation and slow response. Remote terrains hinder timely monitoring.
          </p>
        </div>
      </div>

      <div className="mt-6 bg-white rounded-2xl shadow p-6 border-l-8 border-purple-600">
        <h3 className="text-2xl font-semibold text-purple-700 mb-3">Expected Solution</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <strong>Mobile App</strong>
            <p className="text-sm text-gray-600">Community reporting & offline-first forms.</p>
          </div>
          <div>
            <strong>AI Prediction</strong>
            <p className="text-sm text-gray-600">Outbreak risk scoring & prioritization.</p>
          </div>
          <div>
            <strong>IoT Integration</strong>
            <p className="text-sm text-gray-600">Low-cost sensors for pH, turbidity & bacteria.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
