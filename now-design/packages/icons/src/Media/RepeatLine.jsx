import React from 'react';

const RepeatLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M4.99967 3.33337H17.4997C17.9599 3.33337 18.333 3.70647 18.333 4.16671V10H16.6663V5.00004H4.99967V7.50004L0.833008 4.16671L4.99967 0.833374V3.33337ZM14.9997 16.6667H2.49967C2.03944 16.6667 1.66634 16.2936 1.66634 15.8334V10H3.33301V15H14.9997V12.5L19.1663 15.8334L14.9997 19.1667V16.6667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default RepeatLine;
