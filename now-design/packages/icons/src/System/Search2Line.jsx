import React from 'react';

const Search2Line = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9.16699 1.66663C13.307 1.66663 16.667 5.02663 16.667 9.16663C16.667 13.3066 13.307 16.6666 9.16699 16.6666C5.02699 16.6666 1.66699 13.3066 1.66699 9.16663C1.66699 5.02663 5.02699 1.66663 9.16699 1.66663ZM9.16699 15C12.3899 15 15.0003 12.3895 15.0003 9.16663C15.0003 5.94371 12.3899 3.33329 9.16699 3.33329C5.94408 3.33329 3.33366 5.94371 3.33366 9.16663C3.33366 12.3895 5.94408 15 9.16699 15ZM16.2381 15.0592L18.5951 17.4162L17.4166 18.5947L15.0596 16.2377L16.2381 15.0592Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Search2Line;
