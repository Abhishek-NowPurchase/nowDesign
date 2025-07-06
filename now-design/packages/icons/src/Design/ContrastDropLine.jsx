import React from 'react';

const ContrastDropLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10 2.58115L5.87521 6.70593C3.59715 8.98402 3.59715 12.6774 5.87521 14.9555C8.15327 17.2336 11.8467 17.2336 14.1247 14.9555C16.4028 12.6774 16.4028 8.98402 14.1247 6.70594L10 2.58115ZM10 0.224121L15.3033 5.52742C18.2322 8.45636 18.2322 13.2051 15.3033 16.134C12.3743 19.0629 7.62563 19.0629 4.6967 16.134C1.76777 13.2051 1.76777 8.45636 4.6967 5.52742L10 0.224121ZM10 14.9974V6.66405C12.3012 6.66405 14.1667 8.52952 14.1667 10.8307C14.1667 13.1319 12.3012 14.9974 10 14.9974Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ContrastDropLine;
