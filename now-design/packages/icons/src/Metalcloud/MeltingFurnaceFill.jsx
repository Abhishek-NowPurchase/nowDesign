import React from 'react';

const MeltingFurnaceFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.33984 3.33329H11.6667V3.3398H11.6699V1.66663H14.1675V3.35933H13.3333V15C13.3333 16.8416 11.8417 18.3333 10 18.3333C8.15835 18.3333 6.66669 16.8416 6.66667 15V3.35933H2.5V1.66663H8.33984V3.33329ZM8.33984 3.35933H8.33333V6.66663H11.6667V3.3398H8.33984V3.35933Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MeltingFurnaceFill;
