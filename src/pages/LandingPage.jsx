import { Phone, MessageSquare, ArrowRight, GraduationCap } from "lucide-react";

import Header from "../components/Header.jsx";

export default function LandingPage({ onNavigate }) {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-500 selection:text-white relative overflow-x-hidden">
      <Header onNavigate={onNavigate} />

      <section className="relative pt-12 pb-24 lg:pt-24 lg:pb-36 overflow-hidden">
        {/* Subtle Background Architectural Grid Lines */}
        <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-10 pointer-events-none hidden lg:grid grid-cols-4 gap-8 border-l border-orange-200">
          <div className="border-r border-orange-200 h-full"></div>
          <div className="border-r border-orange-200 h-full"></div>
          <div className="border-r border-orange-200 h-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Headline Area */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-xs font-semibold tracking-wide uppercase">
                <GraduationCap className="w-4 h-4" />
                <span>Admissions 2026-27 Open</span>
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Discover Your <br />
                <span className="text-slate-800 font-serif italic font-normal">
                  Education
                </span>{" "}
                Potential
              </h1>
              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                MIT University provides a dynamic, world-class learning
                environment in Shillong that empowers students to reach new
                heights academically and professionally.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
                <button
                  onClick={() => onNavigate && onNavigate("login")}
                  className="px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-base shadow-xl shadow-orange-500/20 flex items-center justify-center space-x-2 transition-all"
                >
                  <span>Inquire Now</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => onNavigate && onNavigate("login")}
                  className="px-8 py-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-base flex items-center justify-center transition-all"
                >
                  Access Student Portal
                </button>
              </div>
            </div>

            {/* Right Card Feature Area */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-md p-8 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-2xl relative">
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-2xl bg-orange-500 flex items-center justify-center text-white shadow-lg">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Campus Excellence
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Experience state-of-the-art infrastructure nestled in the
                  pristine hills of Mawkasiang, Shillong. Join our
                  multidisciplinary cohorts today.
                </p>
                <div className="space-y-3 pt-2 border-t border-slate-200">
                  <div className="flex justify-between text-xs font-semibold text-slate-700">
                    <span>Placement Rate</span>
                    <span className="text-orange-600">95%+</span>
                  </div>
                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-orange-500 h-full w-[95%] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed right-4 bottom-8 z-40 flex flex-col space-y-3">
        <button
          onClick={() => alert("Opening Phone Helpline...")}
          className="w-12 h-12 rounded-full bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center shadow-xl transition-all transform hover:scale-110"
          title="Call Admissions"
        >
          <Phone className="w-5 h-5" />
        </button>
        <button
          onClick={() => alert("Opening WhatsApp Chat...")}
          className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-xl transition-all transform hover:scale-110"
          title="WhatsApp Enquiry"
        >
          <MessageSquare className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
