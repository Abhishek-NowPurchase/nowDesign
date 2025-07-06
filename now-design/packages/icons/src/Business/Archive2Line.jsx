import React from 'react';

const Archive2Line = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M18.3333 16.6667V5.83333L16.6666 2.5H3.33329L1.66663 5.83627V16.6667C1.66663 17.1269 2.03973 17.5 2.49996 17.5H17.5C17.9602 17.5 18.3333 17.1269 18.3333 16.6667ZM3.33329 7.5H16.6666V15.8333H3.33329V7.5ZM4.36329 4.16667H15.6366L16.47 5.83333H3.53079L4.36329 4.16667ZM12.5 9.16667H7.49996V10.8333H12.5V9.16667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Archive2Line;
