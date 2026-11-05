import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

import logo from "../assets/logo.svg";

export default function Header({ onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    { label: "Academics", hasDropdown: true },
    { label: "Admission", hasDropdown: true },
    { label: "Happening", hasDropdown: true },
    { label: "Careers", hasDropdown: true },
    { label: "Placement", hasDropdown: true },
    { label: "About Us", hasDropdown: true },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo Section */}
        <div
          className="flex flex-col items-center sm:items-start text-center sm:text-left cursor-pointer group shrink-0"
          onClick={() => onNavigate && onNavigate("landing")}
        >
          <img
            src={logo}
            alt="MIT University Shillong"
            className="h-9 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <span className="text-[8px] sm:text-[10px] font-semibold tracking-[0.2em] text-slate-500 uppercase mt-1">
            University Shillong
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navItems.map((item, idx) => (
            <div key={idx} className="relative group">
              <button
                onClick={() =>
                  setActiveDropdown(activeDropdown === idx ? null : idx)
                }
                className="flex items-center space-x-1 text-sm font-medium text-slate-700 hover:text-orange-600 transition-colors py-2 focus:outline-none"
              >
                <span>{item.label}</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-orange-600 transition-transform group-hover:rotate-180" />
              </button>
            </div>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
          <button
            onClick={() => onNavigate && onNavigate("login")}
            className="hidden sm:inline-flex px-4 py-2 rounded-full text-slate-700 hover:text-orange-600 font-semibold text-sm transition-all"
          >
            Login
          </button>

          <button
            onClick={() => onNavigate && onNavigate("login")}
            className="px-3.5 sm:px-5 py-2 rounded-full sm:py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-orange-500/25 transition-all transform active:scale-95 whitespace-nowrap"
          >
            Apply Now
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-20 inset-x-0 bg-white border-b border-slate-200 shadow-2xl px-6 py-6 space-y-4 animate-fade-in z-50">
          {navItems.map((item, idx) => (
            <div key={idx} className="border-b border-slate-100 pb-3">
              <button
                onClick={() =>
                  setActiveDropdown(activeDropdown === idx ? null : idx)
                }
                className="flex items-center justify-between w-full text-base font-semibold text-slate-800"
              >
                <span>{item.label}</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>
            </div>
          ))}
          <div className="pt-2 flex flex-col space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate && onNavigate("login");
              }}
              className="w-full py-3 rounded-xl border border-slate-300 text-slate-800 font-semibold text-sm text-center block hover:bg-slate-50 transition-all"
            >
              Login to Portal
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate && onNavigate("login");
              }}
              className="w-full py-3 rounded-xl bg-orange-500 text-white font-semibold text-sm shadow-md text-center block"
            >
              Apply Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
