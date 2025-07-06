import React from 'react';

const MoneyPoundBoxFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M2.50423 2.50232H17.5042C17.9645 2.50232 18.3376 2.87541 18.3376 3.33565V16.6689C18.3376 17.1292 17.9645 17.5023 17.5042 17.5023H2.50423C2.044 17.5023 1.6709 17.1292 1.6709 16.6689V3.33565C1.6709 2.87541 2.044 2.50232 2.50423 2.50232ZM7.50423 10.8356V12.5023H6.6709V14.1689H13.3376V12.5023H9.17092V10.8356H11.6709V9.16894H9.17092V8.33561C9.17092 7.64529 9.73058 7.08565 10.4209 7.08565C10.8609 7.08565 11.2477 7.31297 11.4705 7.65658L13.1259 7.24274C12.6934 6.17339 11.6452 5.41899 10.4209 5.41899C8.81008 5.41899 7.50423 6.72482 7.50423 8.33561V9.16894H6.6709V10.8356H7.50423Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MoneyPoundBoxFill;
