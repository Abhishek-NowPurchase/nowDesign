import React from 'react';

const BriefcaseFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M5.83329 4.16671V1.66671C5.83329 1.20647 6.20639 0.833374 6.66663 0.833374H13.3333C13.7935 0.833374 14.1666 1.20647 14.1666 1.66671V4.16671H17.5C17.9602 4.16671 18.3333 4.53981 18.3333 5.00004V16.6667C18.3333 17.127 17.9602 17.5 17.5 17.5H2.49996C2.03973 17.5 1.66663 17.127 1.66663 16.6667V5.00004C1.66663 4.53981 2.03973 4.16671 2.49996 4.16671H5.83329ZM3.33329 12.5V15.8334H16.6666V12.5H3.33329ZM9.16662 9.16671V10.8334H10.8333V9.16671H9.16662ZM7.49996 2.50004V4.16671H12.5V2.50004H7.49996Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default BriefcaseFill;
