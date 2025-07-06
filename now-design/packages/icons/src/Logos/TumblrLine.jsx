import React from 'react';

const TumblrLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M6.66732 6.66663C7.56327 6.66663 9.58175 6.10553 9.58175 2.91663V1.66663H10.8317V6.66663H15.0007V8.33329H10.8317V10.7575C10.8343 12.8255 10.8343 13.83 10.834 14.1666C10.8325 16.007 12.1801 17 14.8216 17V18.3333C14.2923 18.3326 13.6693 18.3326 12.9529 18.3333C10.9513 18.3352 9.165 16.6374 9.165 14.5454V8.33329H5.83398V6.66663H6.66732Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default TumblrLine;
