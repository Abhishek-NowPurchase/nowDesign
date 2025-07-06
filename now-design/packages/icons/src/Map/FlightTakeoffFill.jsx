import React from 'react';

const FlightTakeoffFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M18.291 8.42653C18.4697 9.09336 18.074 9.77878 17.4072 9.95745L4.35166 13.4556C3.9823 13.5546 3.59298 13.3895 3.40738 13.0552L1.22168 9.11795L2.42909 8.79445L4.48558 10.8316L8.73166 9.69386L4.9729 3.79916L6.58277 3.3678L12.3756 8.71745L16.7601 7.54264C17.4269 7.36396 18.1123 7.75969 18.291 8.42653ZM3.3336 15.8334H16.6669V17.5H3.3336V15.8334Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FlightTakeoffFill;
