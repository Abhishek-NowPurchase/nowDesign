import React from 'react';

const PercentFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M14.5873 17.5023C12.9764 17.5023 11.6706 16.1964 11.6706 14.5856C11.6706 12.9748 12.9764 11.6689 14.5873 11.6689C16.1981 11.6689 17.5039 12.9748 17.5039 14.5856C17.5039 16.1964 16.1981 17.5023 14.5873 17.5023ZM5.42057 8.33561C3.80975 8.33561 2.50391 7.02981 2.50391 5.41899C2.50391 3.80815 3.80975 2.50232 5.42057 2.50232C7.03141 2.50232 8.33726 3.80815 8.33726 5.41899C8.33726 7.02981 7.03141 8.33561 5.42057 8.33561ZM15.8965 2.93125L17.075 4.10976L4.11136 17.0734L2.93284 15.8949L15.8965 2.93125Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default PercentFill;
