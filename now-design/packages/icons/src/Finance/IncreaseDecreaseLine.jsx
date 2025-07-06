import React from 'react';

const IncreaseDecreaseLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M2.50423 2.50232H17.5042C17.9645 2.50232 18.3376 2.87541 18.3376 3.33565V16.6689C18.3376 17.1292 17.9645 17.5023 17.5042 17.5023H2.50423C2.044 17.5023 1.6709 17.1292 1.6709 16.6689V3.33565C1.6709 2.87541 2.044 2.50232 2.50423 2.50232ZM3.33757 4.16899V15.8356H16.6709V4.16899H3.33757ZM7.50423 9.16894H9.17092V10.8356H7.50423V12.5023H5.83757V10.8356H4.1709V9.16894H5.83757V7.50232H7.50423V9.16894ZM10.8376 9.16894H15.8376V10.8356H10.8376V9.16894Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default IncreaseDecreaseLine;
