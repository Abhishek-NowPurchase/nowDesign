import React from 'react';

const Box3Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M17.0848 4.93525L9.99968 0.833374L2.91462 4.93525L9.99968 9.03712L17.0848 4.93525ZM2.08301 6.37962V14.5834L9.16634 18.6843V10.4805L2.08301 6.37962ZM10.833 18.6843L17.9163 14.5834V6.37962L10.833 10.4805V18.6843Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Box3Fill;
