import React from 'react';

const MoneyCnyBoxLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M2.50423 2.50232H17.5042C17.9645 2.50232 18.3376 2.87541 18.3376 3.33565V16.6689C18.3376 17.1292 17.9645 17.5023 17.5042 17.5023H2.50423C2.044 17.5023 1.6709 17.1292 1.6709 16.6689V3.33565C1.6709 2.87541 2.044 2.50232 2.50423 2.50232ZM3.33757 4.16899V15.8356H16.6709V4.16899H3.33757ZM10.8376 10.8356H13.3376V12.5023H10.8376V14.1689H9.17092V12.5023H6.6709V10.8356H9.17092V10.0023H6.6709V8.33561H8.82575L7.05796 6.56789L8.23647 5.38937L10.0042 7.15714L11.772 5.38937L12.9505 6.56789L11.1827 8.33561H13.3376V10.0023H10.8376V10.8356Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MoneyCnyBoxLine;
