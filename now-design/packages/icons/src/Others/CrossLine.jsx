import React from 'react';

const CrossLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M7.49967 1.66663H12.4997V5.83329H16.6663V10.8333H12.4997V18.3333H7.49967V10.8333H3.33301V5.83329H7.49967V1.66663ZM9.16634 3.33329V7.49996H4.99967V9.16662H9.16634V16.6666H10.833V9.16662H14.9997V7.49996H10.833V3.33329H9.16634Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default CrossLine;
