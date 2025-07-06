import React from 'react';

const WalletFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M1.6709 7.49988H17.5042C17.9645 7.49988 18.3376 7.87297 18.3376 8.33321V16.6666C18.3376 17.1268 17.9645 17.4999 17.5042 17.4999H2.50423C2.044 17.4999 1.6709 17.1268 1.6709 16.6666V7.49988ZM2.50423 2.49988H15.0042V5.83321H1.6709V3.33321C1.6709 2.87297 2.044 2.49988 2.50423 2.49988ZM12.5042 11.6666V13.3332H15.0042V11.6666H12.5042Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default WalletFill;
