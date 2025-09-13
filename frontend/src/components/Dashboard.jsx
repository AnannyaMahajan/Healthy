import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard(){
  const [predict, setPredict] = useState(null);
  const [recentReports, setRecentReports] = useState([]);
  const [waterReports, setWaterReports] = useState([]);

  useEffect(()=>{
    async function load(){
      try{
        const p = await axios.get("http://localhost:8000/api/predict/");
        setPredict(p.data);

        const r = await axios.get("http://localhost:8000/api/reports/");
      }catch(e){}
      try {
        const w = await axios.get("http://localhost:8000/api/water/");
        setWaterReports(w.data);
      } catch(e){}
    }
    load();
  },[]);

  return (
    <section id="dashboard" className="my-12">
      <div className="bg-white rounded-2xl shadow p-6">
        <h3 className="text-xl font-semibold mb-4">Admin Dashboard (Demo)</h3>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-gray-50 rounded">
            <div className="text-sm text-gray-500">Community Risk</div>
            <div className="text-2xl font-bold">{predict ? predict.risk_label.toUpperCase() : '—'}</div>
            <div className="text-sm text-gray-500">Score: {predict ? predict.risk_score : '—'}</div>
          </div>
          <div className="p-4 bg-gray-50 rounded">
            <div className="text-sm text-gray-500">Recent Reports</div>
            <div className="text-2xl font-bold">{predict ? predict.details.symptom_reports : '—'}</div>
          </div>
          <div className="p-4 bg-gray-50 rounded">
            <div className="text-sm text-gray-500">Water Samples</div>
            <div className="text-2xl font-bold">{predict ? predict.details.water_samples : '—'}</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-white border rounded">
            <h4 className="font-semibold mb-2">Recent Water Reports</h4>
            <div className="text-sm text-gray-600">
              {waterReports.length===0 ? "No samples" : waterReports.slice(0,6).map(w=>(
                <div key={w.id} className="mb-2 border-b pb-2">
                  <div className="text-sm font-semibold">{w.source_name} — {w.location}</div>
                  <div className="text-xs text-gray-500">pH: {w.pH ?? 'n/a'} · Turbidity: {w.turbidity ?? 'n/a'} · Bacteria: {w.bacteria_count ?? 'n/a'}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 bg-white border rounded">
            <h4 className="font-semibold mb-2">Actions</h4>
            <div className="flex flex-col gap-2">
              <button className="px-3 py-2 bg-yellow-400 text-white rounded">Send Alert to District</button>
              <button className="px-3 py-2 bg-red-500 text-white rounded">Mark area as high-risk</button>
              <button className="px-3 py-2 bg-gray-200">Export CSV</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
