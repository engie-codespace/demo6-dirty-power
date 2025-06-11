import React from "react";

interface FourBladeWindTurbineProps {
  onBladeClick?: (bladeIndex: number) => void;
}

const bladeColors = ["#3A7CA5", "#F39C12", "#15803d", "#333333"];

export const FourBladeWindTurbine: React.FC<FourBladeWindTurbineProps> = ({ onBladeClick }) => {
  return (
    <svg
      width="240"
      height="240"
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-0 ml-0 block"
      style={{ display: 'block' }}
    >
      {/* Center hub */}
      <circle cx="120" cy="120" r="18" fill="#888" stroke="#555" strokeWidth="3" />
      {/* 4 blades */}
      {[0, 1, 2, 3].map((i) => {
        const angle = i * 90;
        return (
          <g
            key={i}
            style={{ transform: `rotate(${angle}deg)`, transformOrigin: "120px 120px" }}
            onClick={() => onBladeClick && onBladeClick(i)}
            className="cursor-pointer hover:opacity-70 transition"
          >
            <rect
              x="112"
              y="30"
              width="16"
              height="70"
              rx="8"
              fill={bladeColors[i]}
              stroke="#222"
              strokeWidth="2"
              style={{ filter: "drop-shadow(0 2px 2px #0002)" }}
            />
          </g>
        );
      })}
      {/* Mast */}
      <rect x="114" y="138" width="12" height="70" rx="6" fill="#888" stroke="#555" strokeWidth="2" />
    </svg>
  );
};

export default FourBladeWindTurbine;
