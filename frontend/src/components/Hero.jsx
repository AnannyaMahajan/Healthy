import React from "react";

export default function Hero(){
  return (
    <section className="py-16 bg-gradient-to-r from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">AI-Powered Smart Health Surveillance</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Detect and prevent water-borne disease outbreaks in vulnerable communities using community reports, IoT water sensors, and AI prediction.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="#report" className="px-6 py-3 bg-primary text-white rounded-lg shadow hover:opacity-90">Report Symptoms</a>
          <a href="#dashboard" className="px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition">View Dashboard</a>
        </div>
      </div>
    </section>
  );
}
