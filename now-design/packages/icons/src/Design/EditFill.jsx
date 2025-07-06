import React from 'react';

const EditFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M6.03553 14.9973H2.5V11.4617L12.0292 1.93255C12.3547 1.60712 12.8822 1.60712 13.2077 1.93255L15.5647 4.28958C15.8902 4.61501 15.8902 5.14265 15.5647 5.46809L6.03553 14.9973ZM2.5 16.664H17.5V18.3306H2.5V16.664Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default EditFill;
