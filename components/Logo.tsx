import React from 'react';

interface LogoProps {
  className?: string;
  inverted?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-8 w-8", inverted = false }) => {
  // Brand Colors
  const brandBlue = "#0D4B6F";
  const brandOrange = "#EA580C";
  const white = "#FFFFFF";

  const primaryColor = inverted ? white : brandBlue;

  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* 360 Ring - Slightly open at top-right (approx 45deg) */}
      <path 
        d="M 85 25 A 42 42 0 1 1 65 10" 
        stroke={primaryColor} 
        strokeWidth="10" 
        strokeLinecap="round" 
      />
      
      {/* Logistics Path Arrow */}
      {/* A path moving from bottom left, curving to center right */}
      <path 
        d="M 30 65 Q 45 65 55 50 T 70 35" 
        stroke={primaryColor} 
        strokeWidth="8" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      
      {/* Accent Pin/Tip */}
      <circle cx="70" cy="35" r="7" fill={brandOrange} />
    </svg>
  );
};

export default Logo;