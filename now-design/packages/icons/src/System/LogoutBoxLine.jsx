import React from 'react';

const LogoutBoxLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M3.33398 15H5.00065V16.6666H15.0007V3.33329H5.00065V4.99996H3.33398V2.49996C3.33398 2.03973 3.70708 1.66663 4.16732 1.66663H15.834C16.2942 1.66663 16.6673 2.03973 16.6673 2.49996V17.5C16.6673 17.9602 16.2942 18.3333 15.834 18.3333H4.16732C3.70708 18.3333 3.33398 17.9602 3.33398 17.5V15ZM5.00065 9.16662H10.834V10.8333H5.00065V13.3333L0.833984 9.99996L5.00065 6.66663V9.16662Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default LogoutBoxLine;
