import React from 'react';

const BarcodeFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M1.6665 3.33337H3.33317V16.6667H1.6665V3.33337ZM4.99984 3.33337H6.6665V16.6667H4.99984V3.33337ZM7.49984 3.33337H9.99984V16.6667H7.49984V3.33337ZM10.8332 3.33337H12.4998V16.6667H10.8332V3.33337ZM13.3332 3.33337H14.9998V16.6667H13.3332V3.33337ZM15.8332 3.33337H18.3332V16.6667H15.8332V3.33337Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default BarcodeFill;
