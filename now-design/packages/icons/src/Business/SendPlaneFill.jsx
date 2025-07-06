import React from 'react';

const SendPlaneFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M1.62168 7.7628C1.18623 7.61765 1.18279 7.38346 1.63064 7.23417L17.5358 1.93245C17.9762 1.78565 18.2288 2.03216 18.1054 2.46406L13.561 18.3693C13.4352 18.8096 13.1814 18.8249 12.9953 18.4063L9.99987 11.6666L14.9999 4.99998L8.33322 9.99994L1.62168 7.7628Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default SendPlaneFill;
