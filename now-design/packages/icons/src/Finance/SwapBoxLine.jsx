import React from 'react';

const SwapBoxLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M3.33757 4.16899V15.8356H16.6709V4.16899H3.33757ZM2.50423 2.50232H17.5042C17.9645 2.50232 18.3376 2.87541 18.3376 3.33565V16.6689C18.3376 17.1292 17.9645 17.5023 17.5042 17.5023H2.50423C2.044 17.5023 1.6709 17.1292 1.6709 16.6689V3.33565C1.6709 2.87541 2.044 2.50232 2.50423 2.50232ZM12.5042 5.83565L15.4209 8.33561L12.5042 10.8356V9.16894H9.17092V7.50232H12.5042V5.83565ZM7.50423 14.1689L4.58757 11.6689L7.50423 9.16894V10.8356H10.8376V12.5023H7.50423V14.1689Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default SwapBoxLine;
