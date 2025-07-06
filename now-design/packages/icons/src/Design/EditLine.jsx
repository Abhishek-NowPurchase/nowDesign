import React from 'react';

const EditLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M5.34517 13.2416L13.7969 4.78985L12.6184 3.61133L4.16667 12.0631V13.2416H5.34517ZM6.03553 14.9083H2.5V11.3727L12.0292 1.84356C12.3547 1.51813 12.8822 1.51813 13.2077 1.84356L15.5647 4.20059C15.8902 4.52602 15.8902 5.05366 15.5647 5.3791L6.03553 14.9083ZM2.5 16.575H17.5V18.2416H2.5V16.575Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default EditLine;
