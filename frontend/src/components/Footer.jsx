import React from "react";

export default function Footer(){
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-6xl mx-auto px-6 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} SmartHealth — Built for Rural Healthcare Excellence. Demo for Hackathon.
      </div>
    </footer>
  );
}
