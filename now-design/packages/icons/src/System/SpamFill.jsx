import React from 'react';

const SpamFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M14.583 2.08325L19.1663 9.99992L14.583 17.9166H5.41634L0.833008 9.99992L5.41634 2.08325H14.583ZM9.16634 12.4999V14.1666H10.833V12.4999H9.16634ZM9.16634 5.83325V10.8333H10.833V5.83325H9.16634Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default SpamFill;
