import React from 'react';

const Wallet2Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M18.3376 6.66654H10.8376C10.3773 6.66654 10.0042 7.03964 10.0042 7.49988V12.4999C10.0042 12.9601 10.3773 13.3332 10.8376 13.3332H18.3376V16.6666C18.3376 17.1268 17.9645 17.4999 17.5042 17.4999H2.50423C2.044 17.4999 1.6709 17.1268 1.6709 16.6666V3.33321C1.6709 2.87297 2.044 2.49988 2.50423 2.49988H17.5042C17.9645 2.49988 18.3376 2.87297 18.3376 3.33321V6.66654ZM12.5042 9.16655H15.0042V10.8332H12.5042V9.16655Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Wallet2Fill;
