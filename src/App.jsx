import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";

export default function App() {
  const [currentView, setCurrentView] = useState("landing"); // 'landing', 'login', 'dashboard'

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Render active page component */}
      {currentView === "landing" && <LandingPage onNavigate={setCurrentView} />}
      {currentView === "login" && (
        <LoginPage onLoginSuccess={() => setCurrentView("dashboard")} />
      )}
      {currentView === "dashboard" && (
        <DashboardPage onLogout={() => setCurrentView("landing")} />
      )}
    </div>
  );
}
