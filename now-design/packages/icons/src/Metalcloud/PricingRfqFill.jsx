import React from 'react';

const PricingRfqFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 17.494V6.6665L12.4975 1.6665H3.335C2.87417 1.6665 2.5 2.04567 2.5 2.49317V17.5065C2.50022 17.7258 2.5875 17.9361 2.74266 18.0911C2.89783 18.2461 3.10818 18.3332 3.3275 18.3332H16.6725C16.7819 18.3324 16.8901 18.3101 16.991 18.2675C17.0918 18.2249 17.1832 18.1629 17.2601 18.085C17.3369 18.007 17.3976 17.9147 17.4388 17.8134C17.48 17.712 17.5008 17.6034 17.5 17.494ZM9.16748 5.83307H6.66748V7.49973H9.16748V5.83307ZM13.3341 9.1664H6.66748V10.8331H13.3341V9.1664ZM13.3341 12.4997H6.66748V14.1664H13.3341V12.4997Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default PricingRfqFill;
