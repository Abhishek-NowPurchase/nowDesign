import React from 'react';

const CornerUpRightLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M4.16658 8.33344L4.16647 15.8334H5.83314L5.83322 10.0001L14.3098 10L11.0183 13.2915L12.1968 14.47L17.5001 9.16669L12.1968 3.8634L11.0183 5.04191L14.3098 8.33336L4.16658 8.33344Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default CornerUpRightLine;
