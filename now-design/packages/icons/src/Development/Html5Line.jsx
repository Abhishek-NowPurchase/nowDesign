import React from 'react';

const Html5Line = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10 15.1481L6.15069 14.1018L5.87642 11.1481H7.76797L7.90037 12.6851L10 13.2407L12.0996 12.6851L12.3172 10.2963H5.80076L5.27112 4.73144H14.7289L14.5398 6.57403H7.35183L7.52207 8.45362H14.3695L13.8493 14.1018L10 15.1481ZM2.5 1.66663H17.5L16.1475 16.6666L10 18.3333L3.85246 16.6666L2.5 1.66663ZM4.3237 3.33329L5.40822 15.3615L10 16.6065L14.5917 15.3615L15.6763 3.33329H4.3237Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Html5Line;
