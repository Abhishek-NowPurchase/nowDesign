import React from 'react';

const FundsBoxLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M3.33757 4.16899V15.8356H16.6709V4.16899H3.33757ZM2.50423 2.50232H17.5042C17.9645 2.50232 18.3376 2.87541 18.3376 3.33565V16.669C18.3376 17.1292 17.9645 17.5023 17.5042 17.5023H2.50423C2.044 17.5023 1.6709 17.1292 1.6709 16.669V3.33565C1.6709 2.87541 2.044 2.50232 2.50423 2.50232ZM12.3317 8.16306L10.8376 6.66899H15.0042V10.8356L13.5102 9.34156L10.2902 12.5616L8.52242 10.7938L6.1654 13.1508L4.98689 11.9723L8.52242 8.43673L10.2902 10.2045L12.3317 8.16306Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FundsBoxLine;
