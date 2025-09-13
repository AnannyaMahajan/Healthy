import React from "react";

export default function Header(){
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">SH</div>
          <div>
            <h1 className="text-xl font-extrabold text-primary">SmartHealth</h1>
            <p className="text-sm text-gray-500">Surveillance & Early Warning System</p>
          </div>
        </div>
        <nav className="space-x-4">
          <a href="#report" className="text-sm hover:text-primary">Report</a>
          <a href="#water" className="text-sm hover:text-primary">Water</a>
          <a href="#dashboard" className="text-sm hover:text-primary">Dashboard</a>
        </nav>
      </div>
    </header>
  );
}
