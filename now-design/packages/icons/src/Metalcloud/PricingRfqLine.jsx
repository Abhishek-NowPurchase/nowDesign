import React from 'react';

const PricingRfqLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M17.5 6.66663V17.4941C17.5008 17.6036 17.48 17.7121 17.4388 17.8135C17.3976 17.9149 17.3369 18.0072 17.2601 18.0851C17.1832 18.163 17.0918 18.225 16.991 18.2676C16.8902 18.3102 16.7819 18.3325 16.6725 18.3333H3.3275C3.10818 18.3333 2.89783 18.2462 2.74266 18.0912C2.5875 17.9362 2.50022 17.7259 2.5 17.5066V2.49329C2.5 2.04579 2.87417 1.66663 3.335 1.66663H12.4975L17.5 6.66663ZM15.8333 7.49996H11.6667V3.33329H4.16667V16.6666H15.8333V7.49996ZM6.66667 5.83329H9.16667V7.49996H6.66667V5.83329ZM6.66667 9.16662H13.3333V10.8333H6.66667V9.16662ZM6.66667 12.5H13.3333V14.1666H6.66667V12.5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default PricingRfqLine;
