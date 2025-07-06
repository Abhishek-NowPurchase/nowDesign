import React from 'react';

const Ruler2Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M12.5 17.5H10.8333V15H9.16667V17.5H7.5V15.8333H5.83333V17.5H3.33333C2.8731 17.5 2.5 17.1269 2.5 16.6667V14.1667H4.16667V12.5H2.5V10.8333H5V9.16667H2.5V7.5H4.16667V5.83333H2.5V3.33333C2.5 2.8731 2.8731 2.5 3.33333 2.5H8.33333C8.79358 2.5 9.16667 2.8731 9.16667 3.33333V10.8333H16.6667C17.1269 10.8333 17.5 11.2064 17.5 11.6667V16.6667C17.5 17.1269 17.1269 17.5 16.6667 17.5H14.1667V15.8333H12.5V17.5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Ruler2Fill;
