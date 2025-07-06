import React from 'react';

const MedicalNurseFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M12.4646 12.97C14.6798 13.8515 16.3108 15.8865 16.6159 18.3333H3.38574C3.69084 15.8865 5.32188 13.8515 7.53713 12.97L10.0008 16.6666L12.4646 12.97ZM15.0008 1.66663V6.66663C15.0008 9.42804 12.7622 11.6666 10.0008 11.6666C7.23941 11.6666 5.00083 9.42804 5.00083 6.66663V1.66663H15.0008ZM13.3342 6.66663H6.6675C6.6675 8.50754 8.15988 9.99996 10.0008 9.99996C11.8418 9.99996 13.3342 8.50754 13.3342 6.66663Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MedicalNurseFill;
