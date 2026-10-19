import { useState, useEffect } from "react";

export default function Loader({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("INITIALIZING INDUSTRIAL GATEWAY...");
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const bootSteps = [
      { at: 20, text: "LOADING ENGINEERING ASSETS..." },
      { at: 45, text: "VERIFYING GSTIN & CERTIFICATIONS..." },
      { at: 70, text: "SYNCHRONIZING FLUID DYNAMICS MODULES..." },
      { at: 90, text: "ESTABLISHING SECURE CONNECTION..." },
      { at: 100, text: "SYSTEM READY." }
    ];

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 8) + 4;
        const currentStep = bootSteps.find(s => next >= s.at && prev < s.at);
        if (currentStep) setStatusText(currentStep.text);

        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFading(true);
            setTimeout(() => onLoadingComplete(), 700); // Smooth transition out
          }, 350);
          return 100;
        }
        return next;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 99999,
      background: 'radial-gradient(circle at center, #0f0728 0%, #020108 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: isFading ? 0 : 1,
      transition: 'opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
      pointerEvents: isFading ? 'none' : 'auto',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Holographic Dual Ring Spinner */}
      <div style={{ position: 'relative', width: '130px', height: '130px', marginBottom: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{
          position: 'absolute', inset: 0, borderRadius: '50%',
          border: '2px solid rgba(139, 92, 246, 0.15)',
          borderTopColor: '#c084fc',
          animation: 'spin-clockwise 1.6s linear infinite'
        }}></div>
        <div style={{
          position: 'absolute', inset: '12px', borderRadius: '50%',
          border: '2px solid rgba(56, 189, 248, 0.12)',
          borderBottomColor: '#38bdf8',
          animation: 'spin-counter 2.2s linear infinite'
        }}></div>
        <div style={{
          width: '54px', height: '54px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(192,132,252,0.3) 0%, transparent 75%)',
          boxShadow: '0 0 30px rgba(139,92,246,0.5)',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <span style={{ fontSize: '0.95rem', fontWeight: 900, color: '#fff', fontFamily: 'monospace', letterSpacing: '0.05em' }}>SE</span>
        </div>
      </div>

      <h1 className="gradient-text" style={{ fontSize: '1.4rem', fontWeight: 900, letterSpacing: '0.2em', marginBottom: '8px', textTransform: 'uppercase' }}>
        Sreeram Enterprises
      </h1>
      <p style={{ fontSize: '0.78rem', color: '#c084fc', letterSpacing: '0.18em', fontFamily: 'monospace', height: '22px', marginBottom: '32px' }}>
        {statusText}
      </p>

      {/* Progress Track */}
      <div style={{ width: '280px', height: '6px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '6px', overflow: 'hidden', padding: '1px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <div style={{ width: `${progress}%`, height: '100%', background: 'linear-gradient(90deg, #8b5cf6, #c084fc, #38bdf8)', borderRadius: '4px', transition: 'width 0.1s ease-out', boxShadow: '0 0 15px rgba(192,132,252,0.8)' }}></div>
      </div>
      
      <div style={{ display: 'flex', width: '280px', marginTop: '12px', fontSize: '0.75rem', color: '#94a3b8', fontFamily: 'monospace' }}>
        <span>BOOT SEQUENCE</span>
        <span style={{ marginLeft: 'auto', color: '#c084fc', fontWeight: 'bold' }}>{progress}%</span>
      </div>

      <style>{`
        @keyframes spin-clockwise { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes spin-counter { 0% { transform: rotate(0deg); } 100% { transform: rotate(-360deg); } }
      `}</style>
    </div>
  );
}