import React, { useState } from "react";
import axios from "axios";

export default function ReportForm(){
  const [form, setForm] = useState({ name:"", age:"", phone:"", location:"", symptoms:"" });
  const [status, setStatus] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    try{
      const resp = await axios.post("http://localhost:8000/api/reports/", form);
      setStatus({type:"success", msg:"Report submitted"});
      setForm({ name:"", age:"", phone:"", location:"", symptoms:"" });
    }catch(err){
      setStatus({type:"error", msg:"Submission failed"});
    }
  };

  return (
    <div id="report" className="bg-white rounded-2xl shadow p-6">
      <h3 className="text-lg font-semibold mb-3">Community Symptom Report</h3>
      <form onSubmit={submit} className="space-y-3">
        <input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} placeholder="Name (optional)" className="w-full border rounded p-2"/>
        <div className="flex gap-2">
          <input value={form.age} onChange={e=>setForm({...form, age:e.target.value})} placeholder="Age" className="w-1/3 border rounded p-2"/>
          <input value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} placeholder="Phone (optional)" className="w-2/3 border rounded p-2"/>
        </div>
        <input value={form.location} onChange={e=>setForm({...form, location:e.target.value})} placeholder="Location (village / ward)" className="w-full border rounded p-2" required/>
        <textarea value={form.symptoms} onChange={e=>setForm({...form, symptoms:e.target.value})} placeholder="Describe symptoms" className="w-full border rounded p-2" required/>
        <div className="flex items-center gap-3">
          <button type="submit" className="px-4 py-2 bg-primary text-white rounded">Submit</button>
          {status && <span className={status.type==="success"?"text-green-600":"text-red-600"}>{status.msg}</span>}
        </div>
      </form>
    </div>
  );
}
