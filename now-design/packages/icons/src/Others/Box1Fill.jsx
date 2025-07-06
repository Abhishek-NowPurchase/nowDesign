import React from 'react';

const Box1Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9.99968 0.833374L17.9163 5.41671V14.5834L10.833 18.6843V9.51954L2.91462 4.93525L9.99968 0.833374ZM2.08301 6.37962V14.5834L9.16634 18.6843V10.4805L2.08301 6.37962Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Box1Fill;
