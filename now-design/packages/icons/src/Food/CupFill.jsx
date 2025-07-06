import React from 'react';

const CupFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M4.16699 2.5H16.667C17.5875 2.5 18.3337 3.24619 18.3337 4.16667V6.66667C18.3337 7.58714 17.5875 8.33333 16.667 8.33333H15.0003V10.8333C15.0003 12.6742 13.5079 14.1667 11.667 14.1667H6.66699C4.82604 14.1667 3.33366 12.6742 3.33366 10.8333V3.33333C3.33366 2.8731 3.70676 2.5 4.16699 2.5ZM15.0003 4.16667V6.66667H16.667V4.16667H15.0003ZM1.66699 15.8333H16.667V17.5H1.66699V15.8333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default CupFill;
