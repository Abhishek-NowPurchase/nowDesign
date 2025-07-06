import React from 'react';

const InfoCardLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M2.49992 5.00004H17.4999V15H2.49992V5.00004ZM1.66659 3.33337C1.20635 3.33337 0.833252 3.70647 0.833252 4.16671V15.8334C0.833252 16.2936 1.20635 16.6667 1.66659 16.6667H18.3333C18.7935 16.6667 19.1666 16.2936 19.1666 15.8334V4.16671C19.1666 3.70647 18.7935 3.33337 18.3333 3.33337H1.66659ZM10.8333 7.50004H15.8333V9.16671H10.8333V7.50004ZM14.9999 10.8334H10.8333V12.5H14.9999V10.8334ZM4.99992 10.8334H5.83325V13.3334H7.49992V9.16671H4.99992V10.8334ZM7.49992 6.66671H5.83325V8.33337H7.49992V6.66671Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default InfoCardLine;
