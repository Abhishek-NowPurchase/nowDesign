import React from 'react';

const EarthquakeFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9.44007 1.34294C9.73149 1.07806 10.1637 1.05599 10.4785 1.27672L10.5612 1.34294L19.1673 9.16669H16.6673V16.6667C16.6673 17.094 16.3457 17.4463 15.9312 17.4944L15.834 17.5H10.4173L12.5007 14.1667L9.58399 11.6667L12.9173 9.16669L10.834 7.5L11.2507 5L8.75065 7.5L10.834 9.16669L6.66732 11.6667L9.79232 14.5834L7.08399 17.5H4.16732C3.73995 17.5 3.38773 17.1783 3.33959 16.7639L3.33398 16.6667V9.16669H0.833984L9.44007 1.34294Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default EarthquakeFill;
