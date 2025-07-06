import React from 'react';

const VoiceRecognitionLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M4.16471 12.5V15.8333H7.49805V17.5H2.49805V12.5H4.16471ZM17.498 12.5V17.5H12.498V15.8333H15.8313V12.5H17.498ZM10.8313 5V15H9.16467V5H10.8313ZM7.49805 7.5V12.5H5.83138V7.5H7.49805ZM14.1647 7.5V12.5H12.498V7.5H14.1647ZM7.49805 2.5V4.16667H4.16471V7.5H2.49805V2.5H7.49805ZM17.498 2.5V7.5H15.8313V4.16667H12.498V2.5H17.498Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default VoiceRecognitionLine;
