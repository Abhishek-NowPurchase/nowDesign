import React from 'react';

const MenuFoldFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M17.5003 14.9996V16.6663H2.50033V14.9996H17.5003ZM5.83366 2.91663V11.25L1.66699 7.08292L5.83366 2.91663ZM17.5003 9.16629V10.833H10.0003V9.16629H17.5003ZM17.5003 3.33292V4.99958H10.0003V3.33292H17.5003Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MenuFoldFill;
