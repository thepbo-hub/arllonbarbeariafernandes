import React, { useState, useRef } from 'react';

interface TechLogoWithGlowProps {
  logoUrl: string;
  brandName: string;
}

export const TechLogoWithGlow: React.FC<TechLogoWithGlowProps> = ({ logoUrl, brandName }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0, active: false });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      x: (y / rect.height) * -10, // max 5 deg
      y: (x / rect.width) * 10,
      active: true,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, active: false });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center justify-center py-6 px-4 cursor-pointer select-none group"
      style={{ perspective: '800px' }}
    >
      {/* =========================================================================
          CAMADA 1: Volumetric Sapphire & Cyan Ambient Halo (Totalmente Circular)
          Sem nenhuma caixa ou formato quadrado.
          ========================================================================= */}
      <div
        className="absolute w-56 h-56 sm:w-72 sm:h-72 rounded-full pointer-events-none -z-10 animate-neon-pulse"
        style={{
          background: 'radial-gradient(circle, rgba(0, 210, 255, 0.42) 0%, rgba(30, 79, 163, 0.5) 35%, rgba(10, 31, 68, 0.15) 65%, transparent 80%)',
          filter: 'blur(34px)',
        }}
        aria-hidden="true"
      />

      {/* =========================================================================
          CAMADA 2: Conic Laser Beams (Totalmente Circular, sem caixa)
          ========================================================================= */}
      <div
        className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full pointer-events-none -z-10 animate-halo-rotate opacity-70 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'conic-gradient(from 0deg, transparent 0deg, rgba(56, 189, 248, 0.3) 60deg, transparent 120deg, rgba(30, 79, 163, 0.35) 180deg, transparent 240deg, rgba(0, 210, 255, 0.3) 300deg, transparent 360deg)',
          filter: 'blur(22px)',
        }}
        aria-hidden="true"
      />

      {/* =========================================================================
          CAMADA 3: RETÍCULO DE PRECISÃO CIBERNÉTICA (100% Circular, sem quadrado)
          ========================================================================= */}
      <div
        className="absolute w-60 h-60 sm:w-72 sm:h-72 pointer-events-none -z-10 animate-reticle-reverse opacity-40 group-hover:opacity-75 transition-opacity duration-500 flex items-center justify-center"
        aria-hidden="true"
      >
        <svg viewBox="0 0 240 240" className="w-full h-full drop-shadow-[0_0_12px_rgba(56,189,248,0.45)]">
          {/* Anel Exterior Pontilhado / Marcadores de Precisão */}
          <circle
            cx="120"
            cy="120"
            r="110"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="1.2"
            strokeDasharray="4 8 16 8"
            strokeOpacity="0.75"
          />

          {/* Anel Intermediário Fino */}
          <circle
            cx="120"
            cy="120"
            r="98"
            fill="none"
            stroke="#1E4FA3"
            strokeWidth="1"
            strokeDasharray="2 6"
            strokeOpacity="0.6"
          />

          {/* Anel Interno Contínuo */}
          <circle
            cx="120"
            cy="120"
            r="86"
            fill="none"
            stroke="#00D2FF"
            strokeWidth="0.8"
            strokeOpacity="0.4"
          />

          {/* Marcadores Cardeais de Mira (Ticks de Precisão Cirúrgica) */}
          <line x1="120" y1="2" x2="120" y2="16" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
          <line x1="120" y1="224" x2="120" y2="238" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
          <line x1="2" y1="120" x2="16" y2="120" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
          <line x1="224" y1="120" x2="238" y2="120" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />

          {/* Ticks Diagonais Menores (45 graus) */}
          <line x1="38" y1="38" x2="46" y2="46" stroke="#38BDF8" strokeWidth="1.2" strokeOpacity="0.7" />
          <line x1="202" y1="38" x2="194" y2="46" stroke="#38BDF8" strokeWidth="1.2" strokeOpacity="0.7" />
          <line x1="38" y1="202" x2="46" y2="194" stroke="#38BDF8" strokeWidth="1.2" strokeOpacity="0.7" />
          <line x1="202" y1="202" x2="194" y2="194" stroke="#38BDF8" strokeWidth="1.2" strokeOpacity="0.7" />

          {/* Micro-pontos Orbitais */}
          <circle cx="120" cy="10" r="2" fill="#FFFFFF" />
          <circle cx="120" cy="230" r="2" fill="#FFFFFF" />
          <circle cx="10" cy="120" r="2" fill="#FFFFFF" />
          <circle cx="230" cy="120" r="2" fill="#FFFFFF" />
        </svg>
      </div>

      {/* =========================================================================
          CAMADA 4: LOGO PRINCIPAL (Sem nenhuma borda, caixa ou retângulo)
          Fundo 100% transparente com sombra projetada e tilt 3D suave
          ========================================================================= */}
      <div
        className="relative z-10 transition-transform duration-200 ease-out flex items-center justify-center pointer-events-auto"
        style={{
          transform: tilt.active
            ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.04)`
            : 'rotateX(0deg) rotateY(0deg) scale(1)',
          transformStyle: 'preserve-3d',
        }}
      >
        <img
          src={logoUrl}
          alt={brandName}
          className="w-48 sm:w-56 md:w-60 h-auto object-contain drop-shadow-[0_12px_28px_rgba(0,210,255,0.45)] group-hover:drop-shadow-[0_16px_40px_rgba(56,189,248,0.8)] transition-all duration-300"
          loading="eager"
        />

        {/* =========================================================================
            CAMADA 5: Brilho Óptico Circular na Lâmina (Sem qualquer borda quadrada)
            ========================================================================= */}
        {/* Ponto focal de brilho e reflexo circular sobre a navalha */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          aria-hidden="true"
        >
          {/* Pulso de luz circular central na navalha */}
          <div className="w-24 h-24 rounded-full bg-radial from-white/70 via-cyan-400/30 to-transparent blur-md opacity-40 group-hover:opacity-80 transition-opacity duration-300 animate-pulse" />
        </div>

        {/* Brilho estelar pontual (Specular Star Flare) no vértice da lâmina */}
        <div
          className="absolute top-8 right-12 w-2.5 h-2.5 bg-white rounded-full blur-[0.5px] animate-ping opacity-75 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute top-8 right-12 w-2 h-2 bg-cyan-300 rounded-full shadow-[0_0_8px_#38bdf8] opacity-95 pointer-events-none"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};
