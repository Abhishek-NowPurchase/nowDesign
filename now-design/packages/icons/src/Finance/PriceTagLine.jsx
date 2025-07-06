import React from 'react';

const PriceTagLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M2.50391 5.83313L9.54167 1.1413C9.82159 0.954691 10.1863 0.954691 10.4662 1.1413L17.5039 5.83313V17.4998C17.5039 17.96 17.1308 18.3331 16.6706 18.3331H3.33724C2.87701 18.3331 2.50391 17.96 2.50391 17.4998V5.83313ZM4.17057 6.72511V16.6665H15.8373V6.72511L10.0039 2.83622L4.17057 6.72511ZM10.0039 9.16645C9.08342 9.16645 8.33726 8.42028 8.33726 7.4998C8.33726 6.57932 9.08342 5.83313 10.0039 5.83313C10.9244 5.83313 11.6706 6.57932 11.6706 7.4998C11.6706 8.42028 10.9244 9.16645 10.0039 9.16645Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default PriceTagLine;
