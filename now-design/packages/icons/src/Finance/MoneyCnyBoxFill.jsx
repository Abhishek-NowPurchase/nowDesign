import React from 'react';

const MoneyCnyBoxFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M2.50423 2.50232H17.5042C17.9645 2.50232 18.3376 2.87541 18.3376 3.33565V16.6689C18.3376 17.1292 17.9645 17.5023 17.5042 17.5023H2.50423C2.044 17.5023 1.6709 17.1292 1.6709 16.6689V3.33565C1.6709 2.87541 2.044 2.50232 2.50423 2.50232ZM10.8376 10.8356V10.0023H13.3376V8.33561H11.1827L12.9505 6.56789L11.772 5.38937L10.0042 7.15714L8.23647 5.38937L7.05796 6.56789L8.82575 8.33561H6.6709V10.0023H9.17092V10.8356H6.6709V12.5023H9.17092V14.1689H10.8376V12.5023H13.3376V10.8356H10.8376Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MoneyCnyBoxFill;
