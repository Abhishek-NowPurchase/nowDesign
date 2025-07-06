import React from 'react';

const Archive2Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M18.3333 16.6667V5.83333L16.6666 2.5H3.33329L1.66663 5.83627V16.6667C1.66663 17.1269 2.03973 17.5 2.49996 17.5H17.5C17.9602 17.5 18.3333 17.1269 18.3333 16.6667ZM4.36314 4.16667H15.6365L16.4698 5.83333H3.53064L4.36314 4.16667ZM7.49996 9.16667H12.5V10.8333H7.49996V9.16667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Archive2Fill;
