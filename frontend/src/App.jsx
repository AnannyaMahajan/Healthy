import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProblemStatement from "./components/ProblemStatement";
import ReportForm from "./components/ReportForm";
import WaterForm from "./components/WaterForm";
import Dashboard from "./components/Dashboard";
import AIChat from "./components/AIChat";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <div className="max-w-6xl mx-auto px-6">
          <ProblemStatement />
          <div className="grid md:grid-cols-2 gap-8 my-12">
            <ReportForm />
            <WaterForm />
          </div>
          <AIChat />
          <Dashboard />
        </div>
      </main>
      <Footer />
    </div>
  );
}
