import React from 'react';

const InkBottleLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M13.3333 7.49719L16.9762 8.95428C17.2925 9.08087 17.5 9.38728 17.5 9.72803V17.4972C17.5 17.9574 17.1269 18.3305 16.6667 18.3305H3.33333C2.8731 18.3305 2.5 17.9574 2.5 17.4972V9.72803C2.5 9.38728 2.70746 9.08087 3.02384 8.95428L6.66667 7.49719H13.3333ZM13.0123 9.16387H6.98764L4.16667 10.2923V16.6639H15.8333V15.8305H6.66667V11.6639H15.8333V10.2923L13.0123 9.16387ZM13.3333 2.49719C13.7936 2.49719 14.1667 2.87028 14.1667 3.33053V6.66386H5.83333V3.33053C5.83333 2.87028 6.20643 2.49719 6.66667 2.49719H13.3333ZM12.5 4.16386H7.5V4.99719H12.5V4.16386Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default InkBottleLine;
