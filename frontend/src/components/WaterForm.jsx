import React, { useState } from "react";
import axios from "axios";

export default function WaterForm(){
  const [form, setForm] = useState({ source_name:"", pH:"", turbidity:"", bacteria_count:"", location:"" });
  const [status, setStatus] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    try{
      await axios.post("http://localhost:8000/api/water/", {
        ...form,
        pH: form.pH ? parseFloat(form.pH) : null,
        turbidity: form.turbidity ? parseFloat(form.turbidity) : null,
        bacteria_count: form.bacteria_count ? parseInt(form.bacteria_count) : null
      });
      setStatus({type:"success", msg:"Water report submitted"});
      setForm({ source_name:"", pH:"", turbidity:"", bacteria_count:"", location:"" });
    }catch(err){
      setStatus({type:"error", msg:"Submission failed"});
    }
  };

  return (
    <div id="water" className="bg-white rounded-2xl shadow p-6">
      <h3 className="text-lg font-semibold mb-3">Water Quality Report</h3>
      <form onSubmit={submit} className="space-y-3">
        <input value={form.source_name} onChange={e=>setForm({...form, source_name:e.target.value})} placeholder="Source name (e.g., Well near school)" className="w-full border rounded p-2" required/>
        <input value={form.location} onChange={e=>setForm({...form, location:e.target.value})} placeholder="Location" className="w-full border rounded p-2" required/>
        <div className="flex gap-2">
          <input value={form.pH} onChange={e=>setForm({...form, pH:e.target.value})} placeholder="pH (e.g., 7.1)" className="w-1/3 border rounded p-2"/>
          <input value={form.turbidity} onChange={e=>setForm({...form, turbidity:e.target.value})} placeholder="Turbidity (NTU)" className="w-1/3 border rounded p-2"/>
          <input value={form.bacteria_count} onChange={e=>setForm({...form, bacteria_count:e.target.value})} placeholder="Bacteria count (CFU)" className="w-1/3 border rounded p-2"/>
        </div>
        <div className="flex items-center gap-3">
          <button type="submit" className="px-4 py-2 bg-accent text-white rounded">Submit</button>
          {status && <span className={status.type==="success"?"text-green-600":"text-red-600"}>{status.msg}</span>}
        </div>
      </form>
    </div>
  );
}
