import React from 'react';

const HardnessFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M3.88298 17.9411H2.17074L1.25195 16.958V15.1278L3.88298 17.9411Z" fill="#E3E3E3"/>
      <path d="M6.35368 17.9411H4.64144L1.25195 14.318V12.487L6.35368 17.9411Z" fill="#E3E3E3"/>
      <path d="M8.82682 17.9411H7.11377L1.25195 11.6772V10H1.39518L8.82682 17.9411Z" fill="#E3E3E3"/>
      <path d="M5.08984 11.0954L11.4953 17.9411H9.78304L2.35303 10H3.65348L5.08984 11.0954Z" fill="#E3E3E3"/>
      <path d="M10.0312 14.8617L10.7547 14.2977L14.1621 17.9411H12.4507L8.4248 13.6369L10.0312 14.8617Z" fill="#E3E3E3"/>
      <path d="M16.8338 17.9411H15.1208L11.3081 13.8656L12.2993 13.0941L16.8338 17.9411Z" fill="#E3E3E3"/>
      <path d="M18.752 17.1387V17.9411H17.7909L12.8535 12.6628L13.8431 11.8913L18.752 17.1387Z" fill="#E3E3E3"/>
      <path d="M18.752 14.2822V16.1125L14.3981 11.4591L15.3885 10.6877L18.752 14.2822Z" fill="#E3E3E3"/>
      <path d="M14.1654 10.3784L9.9987 13.3333L5.83203 10.3784V2.5H14.1654V10.3784Z" fill="#E3E3E3"/>
      <path d="M18.752 11.429V13.2593L15.9411 10.2563L16.2715 10H17.4141L18.752 11.429Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default HardnessFill;
