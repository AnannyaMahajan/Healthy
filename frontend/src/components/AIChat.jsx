import React, { useState } from "react";
import axios from "axios";

export default function AIChat(){
  const [messages, setMessages] = useState([{from:"bot", text:"Hello! I'm SmartHealth assistant. Describe symptoms or ask about water safety."}]);
  const [input, setInput] = useState("");

  const send = async () => {
    if(!input) return;
    const userMsg = {from:"user", text:input};
    setMessages(m => [...m, userMsg]);
    setInput("");

    // For demo: call predict endpoint and show risk summary
    try {
      const resp = await axios.get("http://localhost:8000/api/predict/");
      const text = `Current community risk: ${resp.data.risk_label.toUpperCase()} (score ${resp.data.risk_score}) — reports ${resp.data.details.symptom_reports}, water samples ${resp.data.details.water_samples}`;
      setMessages(m => [...m, userMsg, {from:"bot", text}]);
    } catch (e) {
      setMessages(m => [...m, {from:"bot", text:"Failed to fetch prediction — try again later."}]);
    }
  };

  return (
    <div className="my-12">
      <div className="bg-white rounded-2xl shadow p-6">
        <h3 className="text-lg font-semibold mb-3">AI Assistant</h3>
        <div className="h-48 overflow-y-auto p-3 bg-gray-50 rounded mb-3">
          {messages.map((m,i)=>(
            <div key={i} className={`mb-2 ${m.from==="user"?"text-right":""}`}>
              <div className={`${m.from==="user"?"inline-block bg-primary text-white":"inline-block bg-green-50 text-gray-800"} px-3 py-2 rounded-lg`}>
                {m.text}
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Describe symptoms or ask question" className="flex-1 border rounded p-2"/>
          <button onClick={send} className="px-4 py-2 bg-primary text-white rounded">Send</button>
        </div>
      </div>
    </div>
  );
}
