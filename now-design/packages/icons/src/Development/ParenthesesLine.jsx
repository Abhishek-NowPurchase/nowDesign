import React from 'react';

const ParenthesesLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M5.76946 17.5C4.26073 15.5535 3.3335 12.9108 3.3335 10C3.3335 7.08918 4.26073 4.44649 5.76946 2.5H7.4479C6.02938 4.49033 5.16683 7.11867 5.16683 10C5.16683 12.8813 6.02938 15.5097 7.4479 17.5H5.76946ZM14.2286 17.5H12.5502C13.9687 15.5097 14.8312 12.8813 14.8312 10C14.8312 7.11867 13.9687 4.49033 12.5502 2.5H14.2286C15.7373 4.44649 16.6646 7.08918 16.6646 10C16.6646 12.9108 15.7373 15.5535 14.2286 17.5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ParenthesesLine;
