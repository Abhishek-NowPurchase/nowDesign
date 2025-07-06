import React from 'react';

const FlutterLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M12.1648 8.90355H14.5218L9.80717 13.6182L14.5218 18.3316H12.1648L7.45074 13.6176L12.1648 8.90355ZM12.0035 1.67029H14.3605L4.93242 11.0984L3.75391 9.91988L12.0035 1.67029Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FlutterLine;
