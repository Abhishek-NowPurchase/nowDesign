import React from 'react';

const SurveyLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M14.1667 1.66675V3.33341H16.6722C17.1293 3.33341 17.5 3.70421 17.5 4.16125V17.5056C17.5 17.9627 17.1292 18.3334 16.6722 18.3334H3.32783C2.87063 18.3334 2.5 17.9627 2.5 17.5056V4.16125C2.5 3.70405 2.87079 3.33341 3.32783 3.33341H5.83333V1.66675H14.1667ZM5.83333 5.00008H4.16667V16.6667H15.8333V5.00008H14.1667V6.66675H5.83333V5.00008ZM7.5 13.3334V15.0001H5.83333V13.3334H7.5ZM7.5 10.8334V12.5001H5.83333V10.8334H7.5ZM7.5 8.33341V10.0001H5.83333V8.33341H7.5ZM12.5 3.33341H7.5V5.00008H12.5V3.33341Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default SurveyLine;
