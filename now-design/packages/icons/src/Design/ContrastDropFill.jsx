import React from 'react';

const ContrastDropFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10 0.224121L15.3033 5.52742C18.2322 8.45636 18.2322 13.2051 15.3033 16.134C12.3743 19.0629 7.62563 19.0629 4.6967 16.134C1.76777 13.2051 1.76777 8.45636 4.6967 5.52742L10 0.224121ZM10 2.58115L5.87521 6.70594C3.59715 8.98402 3.59715 12.6774 5.87521 14.9555C7.01512 16.0954 8.50942 16.6649 10.0035 16.664L10 2.58115Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ContrastDropFill;
