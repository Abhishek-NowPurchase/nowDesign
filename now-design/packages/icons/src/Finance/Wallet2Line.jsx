import React from 'react';

const Wallet2Line = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M16.6709 5.83321V4.16655H3.33757V15.8332H16.6709V14.1666H10.0042C9.544 14.1666 9.17092 13.7935 9.17092 13.3332V6.66654C9.17092 6.2063 9.544 5.83321 10.0042 5.83321H16.6709ZM2.50423 2.49988H17.5042C17.9645 2.49988 18.3376 2.87297 18.3376 3.33321V16.6666C18.3376 17.1268 17.9645 17.4999 17.5042 17.4999H2.50423C2.044 17.4999 1.6709 17.1268 1.6709 16.6666V3.33321C1.6709 2.87297 2.044 2.49988 2.50423 2.49988ZM10.8376 7.49988V12.4999H16.6709V7.49988H10.8376ZM12.5042 9.16655H15.0042V10.8332H12.5042V9.16655Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Wallet2Line;
