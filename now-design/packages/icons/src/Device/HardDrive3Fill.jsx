import React from 'react';

const HardDrive3Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M4.58333 1.66663C4.16307 1.66663 3.80857 1.97958 3.75643 2.3966L2.50643 12.3966C2.50215 12.4309 2.5 12.4654 2.5 12.5V17.5C2.5 17.9602 2.8731 18.3333 3.33333 18.3333H16.6667C17.1269 18.3333 17.5 17.9602 17.5 17.5V12.5C17.5 12.4654 17.4978 12.4309 17.4936 12.3966L16.2436 2.3966C16.1914 1.97958 15.8369 1.66663 15.4167 1.66663H4.58333ZM4.16667 13.3333H15.8333V16.6666H4.16667V13.3333ZM12.5 14.1666H14.1667V15.8333H12.5V14.1666ZM10.8333 14.1666H9.16667V15.8333H10.8333V14.1666Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default HardDrive3Fill;
