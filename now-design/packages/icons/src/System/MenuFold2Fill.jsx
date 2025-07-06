import React from 'react';

const MenuFold2Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M3.33333 2.91663L7.5 7.08292L3.33333 11.25V2.91663ZM17.5 16.6662V14.9995H2.5V16.6662H17.5ZM17.5 10.8329V9.16621H10V10.8329H17.5ZM17.5 4.99955V3.33288H10V4.99955H17.5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MenuFold2Fill;
