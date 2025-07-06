import React from 'react';

const Message3Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M1.66675 7.49478C1.66675 4.73624 3.8972 2.5 6.6673 2.5H13.3328C16.0946 2.5 18.3334 4.74565 18.3334 7.49478V17.5H6.6673C3.90557 17.5 1.66675 15.2543 1.66675 12.5052V7.49478ZM11.6667 9.16667V10.8333H13.3334V9.16667H11.6667ZM6.66675 9.16667V10.8333H8.33341V9.16667H6.66675Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Message3Fill;
