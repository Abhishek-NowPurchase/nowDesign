import React from 'react';

const GovernmentLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M16.6666 5H19.1666V6.66667H18.3333V15.8333H19.1666V17.5H0.833313V15.8333H1.66665V6.66667H0.833313V5H3.33331V3.33333C3.33331 2.8731 3.70641 2.5 4.16665 2.5H15.8333C16.2936 2.5 16.6666 2.8731 16.6666 3.33333V5ZM16.6666 6.66667H3.33331V15.8333H5.83331V10H7.49998V15.8333H9.16665V10H10.8333V15.8333H12.5V10H14.1666V15.8333H16.6666V6.66667ZM4.99998 4.16667V5H15V4.16667H4.99998Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default GovernmentLine;
