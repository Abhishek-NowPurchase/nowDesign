import React from 'react';

const MenuUnfold2Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M17.5 2.91663V11.25L13.3333 7.08292L17.5 2.91663ZM17.5 16.6662V14.9995H2.5V16.6662H17.5ZM10 10.8329V9.16621H2.5V10.8329H10ZM10 4.99955V3.33288H2.5V4.99955H10Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MenuUnfold2Fill;
