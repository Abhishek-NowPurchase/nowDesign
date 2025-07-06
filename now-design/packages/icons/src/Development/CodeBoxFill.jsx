import React from 'react';

const CodeBoxFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M2.49984 2.5H17.4998C17.9601 2.5 18.3332 2.8731 18.3332 3.33333V16.6667C18.3332 17.1269 17.9601 17.5 17.4998 17.5H2.49984C2.0396 17.5 1.6665 17.1269 1.6665 16.6667V3.33333C1.6665 2.8731 2.0396 2.5 2.49984 2.5ZM13.7203 12.9462L16.6665 10L13.7203 7.05372L12.5418 8.23223L14.3095 10L12.5418 11.7677L13.7203 12.9462ZM5.6902 10L7.45796 8.23223L6.27944 7.05372L3.33317 10L6.27944 12.9462L7.45796 11.7677L5.6902 10ZM9.37009 14.1667L12.4032 5.83333H10.6296L7.59648 14.1667H9.37009Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default CodeBoxFill;
