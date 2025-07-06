import React from 'react';

const ControlPlanLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.4122 18.1904L10.1955 16.5713H4.59899V3.61893H12.594V6.85703H15.7919V11.7142L17.3908 12.3366V6.04751L13.3935 1.99988H3.7983C3.35777 1.99988 3 2.35935 3 2.80277V17.3875C3 17.8218 3.35558 18.1904 3.79422 18.1904H10.4122Z" fill="#E3E3E3"/>
      <path d="M14.9925 19.0001L12.1659 16.138L13.2966 14.9932L14.9925 16.7104L17.8192 13.8483L18.9498 14.9932L14.9925 19.0001Z" fill="#E3E3E3"/>
      <path d="M10.1955 6.45237H6.59774V7.66666H10.1955V6.45237Z" fill="#E3E3E3"/>
      <path d="M6.59774 8.88094H13.7932V10.0952H6.59774V8.88094Z" fill="#E3E3E3"/>
      <path d="M10.1955 11.3095H6.59774V12.5238H10.1955V11.3095Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ControlPlanLine;
