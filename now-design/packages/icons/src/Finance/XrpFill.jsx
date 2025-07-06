import React from 'react';

const XrpFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M18.1488 3.33337H15.7846L12.0436 6.97585C11.4989 7.50418 10.7649 7.80036 10.0002 7.80036C9.23549 7.80036 8.50149 7.50418 7.95685 6.97585L4.21873 3.33337H1.85254L6.77471 8.12837C8.55782 9.86387 11.4467 9.86387 13.2286 8.12837L18.1488 3.33337ZM1.85254 16.6667H4.20945L7.96651 13.0126C8.50907 12.4869 9.24032 12.1921 10.0021 12.1921C10.7639 12.1921 11.4952 12.4869 12.0377 13.0126L15.7935 16.6667H18.1488L13.2154 11.8657C11.439 10.1386 8.56107 10.1386 6.78598 11.8657L1.85254 16.6667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default XrpFill;
