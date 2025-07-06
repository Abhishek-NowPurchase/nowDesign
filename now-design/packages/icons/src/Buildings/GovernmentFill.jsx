import React from 'react';

const GovernmentFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M1.66665 15.8333V6.66667H0.833313V5H3.33331V3.33333C3.33331 2.8731 3.70641 2.5 4.16665 2.5H15.8333C16.2936 2.5 16.6666 2.8731 16.6666 3.33333V5H19.1666V6.66667H18.3333V15.8333H19.1666V17.5H0.833313V15.8333H1.66665ZM10.8333 15.8333V10H9.16665V15.8333H10.8333ZM6.66665 15.8333V10H4.99998V15.8333H6.66665ZM15 15.8333V10H13.3333V15.8333H15ZM4.99998 4.16667V5H15V4.16667H4.99998Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default GovernmentFill;
