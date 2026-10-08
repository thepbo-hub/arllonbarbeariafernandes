import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

/**
 * 3D Embossed WhatsApp Icon
 * Realistic specular highlight, radial bevel, and glossy finish.
 */
export const WhatsApp3DIcon: React.FC<IconProps> = ({ className = '', size = 48 }) => {
  return (
    <div 
      className={`relative flex items-center justify-center shrink-0 rounded-2xl transition-transform duration-300 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 64 64"
        width={size}
        height={size}
        className="w-full h-full drop-shadow-[0_6px_12px_rgba(37,211,102,0.35)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="wa-base" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4AEB7D" />
            <stop offset="50%" stopColor="#25D366" />
            <stop offset="100%" stopColor="#128C7E" />
          </linearGradient>
          <radialGradient id="wa-gloss" cx="30%" cy="20%" r="70%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.45" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.3" />
          </radialGradient>
          <linearGradient id="wa-bevel" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0B5345" stopOpacity="0.7" />
          </linearGradient>
          <filter id="wa-inner-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feOffset dx="0" dy="2" />
            <feGaussianBlur stdDeviation="2" result="offset-blur" />
            <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse" />
            <feFlood floodColor="black" floodOpacity="0.3" result="color" />
            <feComposite operator="in" in="color" in2="inverse" result="shadow" />
            <feComposite operator="over" in="shadow" in2="SourceGraphic" />
          </filter>
        </defs>

        {/* 3D Base Body */}
        <rect x="4" y="4" width="56" height="56" rx="16" fill="url(#wa-base)" />
        {/* Bevel Rim */}
        <rect x="4" y="4" width="56" height="56" rx="16" stroke="url(#wa-bevel)" strokeWidth="1.5" />
        {/* Gloss Overlay */}
        <rect x="4" y="4" width="56" height="56" rx="16" fill="url(#wa-gloss)" />
        
        {/* Subtle Top Specular Curved Highlight */}
        <path
          d="M 12 12 Q 32 6 52 12 Q 32 20 12 12 Z"
          fill="white"
          opacity="0.3"
        />

        {/* Embossed White WhatsApp Phone Glyph */}
        <g filter="url(#wa-inner-shadow)">
          <path
            d="M32 15C22.61 15 15 22.61 15 32c0 3.25.92 6.29 2.52 8.9L16 48l7.35-1.48C25.86 48.01 28.84 49 32 49c9.39 0 17-7.61 17-17s-7.61-17-17-17zm8.44 23.38c-.35.98-1.74 1.8-2.4 1.86-.62.06-1.42.09-2.31-.2-.54-.18-1.24-.41-2.14-.8-3.79-1.64-6.26-5.46-6.45-5.71-.19-.25-1.55-2.06-1.55-3.93 0-1.87.98-2.79 1.33-3.17.35-.38.76-.48 1.01-.48.25 0 .5.01.72.02.23.01.55-.09.86.66.32.77 1.09 2.66 1.18 2.86.1.19.16.42.03.67-.13.25-.19.42-.38.64-.19.22-.4.49-.57.66-.19.19-.39.4-.17.78.22.38.99 1.63 2.12 2.64 1.46 1.3 2.69 1.7 3.07 1.89.38.19.61.16.83-.09.23-.26.98-1.14 1.24-1.53.25-.39.51-.32.86-.19.35.13 2.22 1.05 2.6 1.24.38.19.63.29.72.45.1.16.1 1.05-.25 2.03z"
            fill="#FFFFFF"
          />
        </g>
      </svg>
    </div>
  );
};

/**
 * 3D Embossed Instagram Icon
 * Vibrant gradient from yellow, red to deep purple with realistic 3D convex glass finish.
 */
export const Instagram3DIcon: React.FC<IconProps> = ({ className = '', size = 48 }) => {
  return (
    <div 
      className={`relative flex items-center justify-center shrink-0 rounded-2xl transition-transform duration-300 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 64 64"
        width={size}
        height={size}
        className="w-full h-full drop-shadow-[0_6px_14px_rgba(225,48,108,0.38)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="ig-base" x1="15%" y1="95%" x2="85%" y2="5%">
            <stop offset="0%" stopColor="#FFDC80" />
            <stop offset="25%" stopColor="#F77737" />
            <stop offset="50%" stopColor="#F56040" />
            <stop offset="75%" stopColor="#FD1D1D" />
            <stop offset="90%" stopColor="#C13584" />
            <stop offset="100%" stopColor="#833AB4" />
          </linearGradient>
          <radialGradient id="ig-gloss" cx="25%" cy="20%" r="75%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.5" />
            <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.35" />
          </radialGradient>
          <linearGradient id="ig-bevel" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#4A154B" stopOpacity="0.6" />
          </linearGradient>
          <filter id="ig-shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="1.5" stdDeviation="1" floodColor="#000" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* 3D Base Rounded Squircle */}
        <rect x="4" y="4" width="56" height="56" rx="16" fill="url(#ig-base)" />
        {/* Metallic Bevel Rim */}
        <rect x="4" y="4" width="56" height="56" rx="16" stroke="url(#ig-bevel)" strokeWidth="1.5" />
        {/* Specular Convex Gloss */}
        <rect x="4" y="4" width="56" height="56" rx="16" fill="url(#ig-gloss)" />

        {/* Top Glint */}
        <ellipse cx="24" cy="12" rx="16" ry="6" fill="#FFFFFF" opacity="0.28" />

        {/* Camera Outline */}
        <rect
          x="18"
          y="18"
          width="28"
          height="28"
          rx="8"
          stroke="#FFFFFF"
          strokeWidth="3.2"
          filter="url(#ig-shadow)"
        />
        {/* Camera Lens */}
        <circle
          cx="32"
          cy="32"
          r="6.8"
          stroke="#FFFFFF"
          strokeWidth="3.2"
          filter="url(#ig-shadow)"
        />
        {/* Flash Dot */}
        <circle
          cx="39.8"
          cy="24.2"
          r="1.8"
          fill="#FFFFFF"
          filter="url(#ig-shadow)"
        />
      </svg>
    </div>
  );
};

/**
 * 3D Embossed Google Reviews Icon
 * Official "G" mark with 3D depth + 5 golden stars with soft shine.
 */
export const Google3DIcon: React.FC<IconProps> = ({ className = '', size = 48 }) => {
  return (
    <div 
      className={`relative flex items-center justify-center shrink-0 rounded-2xl transition-transform duration-300 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 64 64"
        width={size}
        height={size}
        className="w-full h-full drop-shadow-[0_6px_14px_rgba(255,255,255,0.2)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gg-plate" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="60%" stopColor="#F1F3F4" />
            <stop offset="100%" stopColor="#E2E6EA" />
          </linearGradient>
          <linearGradient id="gg-border" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#B0B7C3" />
          </linearGradient>
          <radialGradient id="gg-highlight" cx="30%" cy="20%" r="70%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.12" />
          </radialGradient>
        </defs>

        {/* 3D Ceramic White Plate */}
        <rect x="4" y="4" width="56" height="56" rx="16" fill="url(#gg-plate)" />
        <rect x="4" y="4" width="56" height="56" rx="16" stroke="url(#gg-border)" strokeWidth="1.5" />
        <rect x="4" y="4" width="56" height="56" rx="16" fill="url(#gg-highlight)" />

        {/* Google 'G' official 4-color path */}
        <g transform="translate(14, 11) scale(0.75)">
          <path
            d="M47.1 24.5c0-1.6-.1-3.2-.4-4.7H24v8.9h13c-.6 3.1-2.3 5.7-4.9 7.5v6.2h7.9c4.6-4.3 7.1-10.6 7.1-17.9z"
            fill="#4285F4"
          />
          <path
            d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.9-6.2c-2.2 1.5-4.9 2.4-8 2.4-6.1 0-11.3-4.1-13.1-9.7H2.7v6.4C6.7 43 14.8 48 24 48z"
            fill="#34A853"
          />
          <path
            d="M10.9 28.7c-.5-1.5-.8-3.1-.8-4.7s.3-3.2.8-4.7V12.9H2.7C1 16.3 0 20.1 0 24s1 7.7 2.7 11.1l8.2-6.4z"
            fill="#FBBC05"
          />
          <path
            d="M24 9.6c3.5 0 6.7 1.2 9.2 3.6l6.9-6.9C35.9 2.4 30.4 0 24 0 14.8 0 6.7 5 2.7 12.9l8.2 6.4c1.8-5.6 7-9.7 13.1-9.7z"
            fill="#EA4335"
          />
        </g>

        {/* 5 Golden Stars at the bottom */}
        <g transform="translate(13, 44)">
          {[0, 8, 16, 24, 32].map((xOffset, i) => (
            <path
              key={i}
              d={`M ${xOffset + 3} 0 L ${xOffset + 4} 2.2 L ${xOffset + 6} 2.4 L ${xOffset + 4.5} 3.8 L ${xOffset + 5} 6 L ${xOffset + 3} 4.7 L ${xOffset + 1} 6 L ${xOffset + 1.5} 3.8 L ${xOffset} 2.4 L ${xOffset + 2} 2.2 Z`}
              fill="#F59E0B"
              stroke="#D97706"
              strokeWidth="0.4"
            />
          ))}
        </g>
      </svg>
    </div>
  );
};

/**
 * 3D Calendar Icon for the Main Hero Booking Button
 * Visually larger, glowing cobalt/sapphire base, dimensional date card, clock & checkmark.
 */
export const Calendar3DIcon: React.FC<IconProps> = ({ className = '', size = 56 }) => {
  return (
    <div 
      className={`relative flex items-center justify-center shrink-0 rounded-2xl ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 64 64"
        width={size}
        height={size}
        className="w-full h-full drop-shadow-[0_8px_18px_rgba(30,79,163,0.6)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="cal-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2D68C4" />
            <stop offset="60%" stopColor="#1E4FA3" />
            <stop offset="100%" stopColor="#0D2E68" />
          </linearGradient>
          <linearGradient id="cal-metal" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#C9CED6" />
            <stop offset="100%" stopColor="#8A92A0" />
          </linearGradient>
          <linearGradient id="cal-header" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
          <radialGradient id="cal-shine" cx="30%" cy="20%" r="70%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.4" />
          </radialGradient>
        </defs>

        {/* 3D Base Plate with Chrome Rim */}
        <rect x="4" y="6" width="56" height="52" rx="14" fill="url(#cal-bg)" />
        <rect x="4" y="6" width="56" height="52" rx="14" stroke="url(#cal-metal)" strokeWidth="1.6" />
        <rect x="4" y="6" width="56" height="52" rx="14" fill="url(#cal-shine)" />

        {/* Calendar Metallic Binder Rings */}
        <rect x="16" y="2" width="6" height="8" rx="3" fill="url(#cal-metal)" stroke="#FFFFFF" strokeWidth="0.8" />
        <rect x="42" y="2" width="6" height="8" rx="3" fill="url(#cal-metal)" stroke="#FFFFFF" strokeWidth="0.8" />

        {/* Calendar Top Banner */}
        <path d="M 5 18 L 59 18" stroke="url(#cal-header)" strokeWidth="4" strokeLinecap="round" />

        {/* Calendar Grid Sheet Area */}
        <rect x="11" y="22" width="42" height="30" rx="8" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />

        {/* 3D Embossed Check & Clock Combo */}
        {/* Clock circle in corner */}
        <circle cx="23" cy="37" r="8" fill="#1E4FA3" stroke="#93C5FD" strokeWidth="1.5" />
        {/* Clock Hands */}
        <path d="M 23 32 L 23 37 L 27 37" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" />

        {/* Glowing Check Badge on right */}
        <circle cx="39" cy="37" r="9.5" fill="#10B981" stroke="#ECFDF5" strokeWidth="1.5" />
        {/* Checkmark */}
        <path d="M 35 37 L 38 40 L 44 33.5" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
};

/**
 * 3D Wi-Fi Icon
 * Deep sapphire badge with radiating chrome/silver Wi-Fi arcs.
 */
export const Wifi3DIcon: React.FC<IconProps> = ({ className = '', size = 48 }) => {
  return (
    <div 
      className={`relative flex items-center justify-center shrink-0 rounded-2xl transition-transform duration-300 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 64 64"
        width={size}
        height={size}
        className="w-full h-full drop-shadow-[0_6px_14px_rgba(59,130,246,0.4)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="wifi-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="50%" stopColor="#0F2B5C" />
            <stop offset="100%" stopColor="#0A1F44" />
          </linearGradient>
          <linearGradient id="wifi-bevel" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E2E8F0" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
          <radialGradient id="wifi-gloss" cx="30%" cy="20%" r="70%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.3" />
          </radialGradient>
        </defs>

        {/* 3D Base Body */}
        <rect x="4" y="4" width="56" height="56" rx="16" fill="url(#wifi-bg)" />
        <rect x="4" y="4" width="56" height="56" rx="16" stroke="url(#wifi-bevel)" strokeWidth="1.5" />
        <rect x="4" y="4" width="56" height="56" rx="16" fill="url(#wifi-gloss)" />

        {/* Radiating 3D Waves with Glow */}
        {/* Outer Wave */}
        <path
          d="M16 23C25.5 15.5 38.5 15.5 48 23"
          stroke="#93C5FD"
          strokeWidth="3.6"
          strokeLinecap="round"
          filter="drop-shadow(0 0 4px rgba(147,197,253,0.8))"
        />
        {/* Mid Wave */}
        <path
          d="M21.5 30C28 24.5 36 24.5 42.5 30"
          stroke="#FFFFFF"
          strokeWidth="3.6"
          strokeLinecap="round"
          filter="drop-shadow(0 0 3px rgba(255,255,255,0.7))"
        />
        {/* Inner Wave */}
        <path
          d="M27 37C30.2 34 33.8 34 37 37"
          stroke="#60A5FA"
          strokeWidth="3.6"
          strokeLinecap="round"
        />
        {/* Center Dot */}
        <circle
          cx="32"
          cy="44"
          r="3.5"
          fill="#FFFFFF"
          stroke="#93C5FD"
          strokeWidth="1.5"
          filter="drop-shadow(0 0 5px rgba(255,255,255,0.9))"
        />
      </svg>
    </div>
  );
};

/**
 * 3D Google Maps Icon
 * Distinctive multi-colored map pin with dimensional relief and shadow.
 */
export const Maps3DIcon: React.FC<IconProps> = ({ className = '', size = 36 }) => {
  return (
    <div className={`relative flex items-center justify-center shrink-0 ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 48 48"
        width={size}
        height={size}
        className="w-full h-full drop-shadow-[0_4px_8px_rgba(234,67,53,0.35)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gmap-red" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FF5252" />
            <stop offset="100%" stopColor="#D50000" />
          </linearGradient>
          <radialGradient id="gmap-shadow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* Pin ground shadow */}
        <ellipse cx="24" cy="44" rx="10" ry="3.5" fill="url(#gmap-shadow)" />

        {/* 3D Map Pin */}
        <path
          d="M24 4C15.16 4 8 11.16 8 20c0 10.2 14.2 22.8 14.8 23.3.7.6 1.7.6 2.4 0C25.8 42.8 40 30.2 40 20c0-8.84-7.16-16-16-16z"
          fill="url(#gmap-red)"
          stroke="#FFFFFF"
          strokeWidth="1.5"
        />
        {/* Inner white circle */}
        <circle cx="24" cy="19" r="6.5" fill="#FFFFFF" />
        {/* Pin Center Core */}
        <circle cx="24" cy="19" r="3.2" fill="#1E4FA3" />
      </svg>
    </div>
  );
};

/**
 * 3D Waze Icon
 * Friendly cyan/blue 3D icon with smiley car.
 */
export const Waze3DIcon: React.FC<IconProps> = ({ className = '', size = 36 }) => {
  return (
    <div className={`relative flex items-center justify-center shrink-0 ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 48 48"
        width={size}
        height={size}
        className="w-full h-full drop-shadow-[0_4px_10px_rgba(51,204,255,0.4)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="waze-body" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38E1FF" />
            <stop offset="60%" stopColor="#00B4D8" />
            <stop offset="100%" stopColor="#0077B6" />
          </linearGradient>
        </defs>
        <rect x="3" y="3" width="42" height="42" rx="12" fill="url(#waze-body)" stroke="#FFFFFF" strokeWidth="1.2" />
        {/* Car wheels */}
        <circle cx="16" cy="36" r="3.2" fill="#0A1F44" stroke="#FFFFFF" strokeWidth="1" />
        <circle cx="32" cy="36" r="3.2" fill="#0A1F44" stroke="#FFFFFF" strokeWidth="1" />
        {/* Body cloud-car */}
        <path
          d="M14 27c0-6 4.5-11 10.5-11s10.5 5 10.5 11c0 4.5-3 8-7 8.8l-1.5 2.2c-.5.8-1.5.8-2 0l-1.5-2.2C18 35.5 14 31.5 14 27z"
          fill="#FFFFFF"
        />
        {/* Eyes */}
        <circle cx="21" cy="24" r="1.8" fill="#0A1F44" />
        <circle cx="28" cy="24" r="1.8" fill="#0A1F44" />
        {/* Smile */}
        <path d="M 21.5 28.5 Q 24.5 31.5 27.5 28.5" stroke="#0A1F44" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </div>
  );
};

/**
 * 3D Uber Icon
 * Sleek metallic obsidian badge with crisp embossed silver typography.
 */
export const Uber3DIcon: React.FC<IconProps> = ({ className = '', size = 36 }) => {
  return (
    <div className={`relative flex items-center justify-center shrink-0 ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 48 48"
        width={size}
        height={size}
        className="w-full h-full drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="uber-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2A2D34" />
            <stop offset="50%" stopColor="#141619" />
            <stop offset="100%" stopColor="#08090A" />
          </linearGradient>
          <linearGradient id="uber-bevel" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#333333" />
          </linearGradient>
        </defs>
        <rect x="3" y="3" width="42" height="42" rx="12" fill="url(#uber-bg)" />
        <rect x="3" y="3" width="42" height="42" rx="12" stroke="url(#uber-bevel)" strokeWidth="1.2" />
        
        {/* Uber Text in Clean Embossed Typography */}
        <text
          x="24"
          y="29"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="13"
          fontWeight="bold"
          fontFamily="system-ui, sans-serif"
          letterSpacing="0.5px"
        >
          Uber
        </text>
      </svg>
    </div>
  );
};

/**
 * 3D 99 Icon
 * Yellow/orange badge with iconic 3D rounded '99'.
 */
export const App993DIcon: React.FC<IconProps> = ({ className = '', size = 36 }) => {
  return (
    <div className={`relative flex items-center justify-center shrink-0 ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 48 48"
        width={size}
        height={size}
        className="w-full h-full drop-shadow-[0_4px_10px_rgba(245,158,11,0.4)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="p99-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FBBF24" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
          <linearGradient id="p99-bevel" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>
        </defs>
        <rect x="3" y="3" width="42" height="42" rx="12" fill="url(#p99-bg)" />
        <rect x="3" y="3" width="42" height="42" rx="12" stroke="url(#p99-bevel)" strokeWidth="1.2" />

        {/* 99 Symbol */}
        <text
          x="24"
          y="31"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="18"
          fontWeight="900"
          fontFamily="system-ui, sans-serif"
          letterSpacing="-1px"
          stroke="#92400E"
          strokeWidth="0.5"
        >
          99
        </text>
      </svg>
    </div>
  );
};

/**
 * 3D Copy / Check Icon
 * Dynamic transition when clicked.
 */
export const Copy3DIcon: React.FC<IconProps & { copied?: boolean }> = ({ className = '', size = 20, copied = false }) => {
  if (copied) {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        stroke="#10B981"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`drop-shadow-[0_0_6px_rgba(16,185,129,0.7)] transition-all ${className}`}
      >
        <path d="M20 6L9 17l-5-5" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-all ${className}`}
    >
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
};
