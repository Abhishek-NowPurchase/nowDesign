import React from 'react';

const Building2Line = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M2.50004 15.8334V4.75041C2.50004 4.39998 2.71927 4.087 3.04859 3.96725L11.1076 1.03667C11.3239 0.958032 11.563 1.0696 11.6416 1.28587C11.6582 1.33151 11.6667 1.3797 11.6667 1.42826V5.55561L16.9302 7.31012C17.2705 7.42354 17.5 7.74199 17.5 8.10068V15.8334H19.1667V17.5H0.833374V15.8334H2.50004ZM4.16671 15.8334H10V3.21288L4.16671 5.3341V15.8334ZM15.8334 15.8334V8.70136L11.6667 7.31243V15.8334H15.8334Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Building2Line;
