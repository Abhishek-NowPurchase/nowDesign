import React from 'react';

const SurveyFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M5 3.33341V6.66675H15V3.33341H16.6722C17.1293 3.33341 17.5 3.70421 17.5 4.16125V17.5056C17.5 17.9627 17.1292 18.3334 16.6722 18.3334H3.32783C2.87063 18.3334 2.5 17.9627 2.5 17.5056V4.16125C2.5 3.70405 2.87079 3.33341 3.32783 3.33341H5ZM7.5 14.1667H5.83333V15.8334H7.5V14.1667ZM7.5 11.6667H5.83333V13.3334H7.5V11.6667ZM7.5 9.16675H5.83333V10.8334H7.5V9.16675ZM13.3333 1.66675V5.00008H6.66667V1.66675H13.3333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default SurveyFill;
