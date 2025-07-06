import React from 'react';

const HardnessLine = ({ size = 24, color = 'currentColor', ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3.88184 17.9411H2.1696L1.25 16.9572V15.127L3.88184 17.9411Z" fill="#E3E3E3"/>
      <path d="M6.35254 17.9411H4.6403L1.25 14.3172V12.4862L6.35254 17.9411Z" fill="#E3E3E3"/>
      <path d="M8.82731 17.9411H7.11426L1.25 11.6748V10H1.39567L8.82731 17.9411Z" fill="#E3E3E3"/>
      <path d="M5.08789 11.0946L11.4933 17.9411H9.78109L2.35107 10H3.65153L5.08789 11.0946Z" fill="#E3E3E3"/>
      <path d="M10.0293 14.8608L10.7528 14.2969L14.161 17.9411H12.4495L8.42367 13.6369L10.0293 14.8608Z" fill="#E3E3E3"/>
      <path d="M16.8335 17.9411H15.1204L11.307 13.8647L12.2974 13.0933L16.8335 17.9411Z" fill="#E3E3E3"/>
      <path d="M18.75 17.1379V17.9411H17.7897L12.8516 12.6619L13.842 11.8905L18.75 17.1379Z" fill="#E3E3E3"/>
      <path d="M18.75 14.2814V16.1117L14.3962 11.4583L15.3866 10.6868L18.75 14.2814Z" fill="#E3E3E3"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M14.165 10.3784L9.99837 13.3333L5.83171 10.3784V2.5H14.165V10.3784ZM7.08171 9.73144L9.99837 11.8001L12.915 9.73144V3.75H7.08171V9.73144Z" fill="#E3E3E3"/>
      <path d="M18.75 11.4282V13.2585L15.9399 10.2563L16.2695 10H17.4129L18.75 11.4282Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default HardnessLine;
