import React from 'react';

const InfoCardFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M0.833374 4.16671C0.833374 3.70647 1.20647 3.33337 1.66671 3.33337H18.3334C18.7936 3.33337 19.1667 3.70647 19.1667 4.16671V15.8334C19.1667 16.2936 18.7936 16.6667 18.3334 16.6667H1.66671C1.20647 16.6667 0.833374 16.2936 0.833374 15.8334V4.16671ZM7.50004 6.66671H5.83337V8.33337H7.50004V6.66671ZM5.83337 10.8334V13.3334H7.50004V9.16671H5.00004V10.8334H5.83337ZM10.8334 7.50004V9.16671H15.8334V7.50004H10.8334ZM15 10.8334H10.8334V12.5H15V10.8334Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default InfoCardFill;
