import React from 'react';

const VoiceRecognitionFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M17.498 2.5V17.5H2.49805V2.5H17.498ZM10.8313 5H9.16467V15H10.8313V5ZM7.49805 7.5H5.83138V12.5H7.49805V7.5ZM14.1647 7.5H12.498V12.5H14.1647V7.5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default VoiceRecognitionFill;
