import React from 'react';

const OilLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M7.55832 5.83337L4.99967 9.67137V16.6667H14.9997V5.83337H7.55832ZM6.66634 4.16671H15.833C16.2933 4.16671 16.6663 4.53981 16.6663 5.00004V17.5C16.6663 17.9603 16.2933 18.3334 15.833 18.3334H4.16634C3.70611 18.3334 3.33301 17.9603 3.33301 17.5V9.16671L6.66634 4.16671ZM10.833 0.833374H14.9997C15.4599 0.833374 15.833 1.20647 15.833 1.66671V3.33337H9.99967V1.66671C9.99967 1.20647 10.3728 0.833374 10.833 0.833374ZM6.66634 10H8.33301V15H6.66634V10Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default OilLine;
