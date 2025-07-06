import React from 'react';

const Building3Line = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M8.33333 8.42596V0.833374L17.5 5.83337V17.5H2.5V5.83337L8.33333 8.42596ZM10 3.64094V10.9905L4.16667 8.39796V15.8334H15.8333V6.82276L10 3.64094Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Building3Line;
