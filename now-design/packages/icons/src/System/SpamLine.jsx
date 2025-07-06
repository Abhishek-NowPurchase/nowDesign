import React from 'react';

const SpamLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M14.583 2.08325L19.1663 9.99992L14.583 17.9166H5.41634L0.833008 9.99992L5.41634 2.08325H14.583ZM13.6221 3.74992H6.37727L2.75884 9.99992L6.37727 16.2499H13.6221L17.2405 9.99992L13.6221 3.74992ZM9.16634 12.4999H10.833V14.1666H9.16634V12.4999ZM9.16634 5.83325H10.833V10.8333H9.16634V5.83325Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default SpamLine;
