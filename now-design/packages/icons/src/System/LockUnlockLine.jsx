import React from 'react';

const LockUnlockLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M5.83333 8.33329H16.6667C17.1269 8.33329 17.5 8.70637 17.5 9.16662V17.5C17.5 17.9602 17.1269 18.3333 16.6667 18.3333H3.33333C2.8731 18.3333 2.5 17.9602 2.5 17.5V9.16662C2.5 8.70637 2.8731 8.33329 3.33333 8.33329H4.16667V7.49996C4.16667 4.2783 6.77834 1.66663 10 1.66663C12.2837 1.66663 14.2609 2.97896 15.2187 4.89064L13.7276 5.63616C13.0435 4.27068 11.6312 3.33329 10 3.33329C7.69882 3.33329 5.83333 5.19878 5.83333 7.49996V8.33329ZM4.16667 9.99996V16.6666H15.8333V9.99996H4.16667ZM8.33333 12.5H11.6667V14.1666H8.33333V12.5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default LockUnlockLine;
