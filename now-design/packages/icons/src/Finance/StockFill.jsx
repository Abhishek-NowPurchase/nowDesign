import React from 'react';

const StockFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M6.67057 4.16907H9.17059V11.6691H6.67057V14.1691H5.00391V11.6691H2.50391V4.16907H5.00391V1.66907H6.67057V4.16907ZM15.0039 8.33573H17.5039V15.8357H15.0039V18.3357H13.3373V15.8357H10.8373V8.33573H13.3373V5.83573H15.0039V8.33573Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default StockFill;
