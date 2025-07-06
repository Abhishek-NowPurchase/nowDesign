import React from 'react';

const GooglePlayFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M3.00826 1.5116L11.4943 9.99996L3.00918 18.4886C2.84829 18.4206 2.70738 18.3016 2.61312 18.1389C2.53966 18.012 2.50098 17.868 2.50098 17.7213V2.27874C2.50098 1.9342 2.71006 1.6385 3.00826 1.5116ZM12.0835 10.5891L14.0018 12.5075L4.88764 17.785L12.0835 10.5891ZM14.7493 7.9241L17.0886 9.27888C17.4869 9.50946 17.6229 10.0193 17.3922 10.4175C17.3193 10.5435 17.2147 10.6483 17.0886 10.7212L14.7485 12.0758L12.6727 9.99996L14.7493 7.9241ZM4.88764 2.21493L14.0027 7.4916L12.0835 9.4108L4.88764 2.21493Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default GooglePlayFill;
