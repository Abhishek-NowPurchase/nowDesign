import React from 'react';

const PatreonFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M12.5013 14.1666C9.04949 14.1666 6.2513 11.3684 6.2513 7.91663C6.2513 4.46484 9.04949 1.66663 12.5013 1.66663C15.9531 1.66663 18.7513 4.46484 18.7513 7.91663C18.7513 11.3684 15.9531 14.1666 12.5013 14.1666ZM1.66797 1.66663H5.0013V18.3333H1.66797V1.66663Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default PatreonFill;
