import React from 'react';

const HomeOfficeFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M17.3332 7.50004H9.99998V14.1667H9.16665V17.5001H4.16665C3.70641 17.5001 3.33331 17.127 3.33331 16.6668V9.16679H0.833313L9.43939 1.34306C9.75723 1.05411 10.2427 1.05411 10.5606 1.34306L17.3332 7.50004ZM11.6666 9.1667H19.1666V15H11.6666V9.1667ZM10.8333 17.5H20V15.8334H10.8333V17.5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default HomeOfficeFill;
