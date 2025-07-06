import React from 'react';

const CursorLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M12.8226 11.2479L14.9501 17.0931L11.0347 18.5181L8.90725 12.673L5.6582 14.7107L7.007 1.36096L16.6213 10.7205L12.8226 11.2479ZM12.8138 16.0969L10.5513 9.88065L13.0175 9.53823L8.31818 4.9634L7.6589 11.4886L9.76825 10.1656L12.0308 16.3819L12.8138 16.0969Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default CursorLine;
