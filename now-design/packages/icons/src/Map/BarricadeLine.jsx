import React from 'react';

const BarricadeLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M5.41102 15.8333H14.589L14.0334 13.3333H5.96658L5.41102 15.8333ZM16.2963 15.8333H17.5V17.5H2.5V15.8333H3.7037L6.52165 3.15256C6.60638 2.77128 6.94456 2.5 7.33514 2.5H12.6648C13.0554 2.5 13.3936 2.77128 13.4783 3.15256L16.2963 15.8333ZM6.33695 11.6667H13.6631L12.9223 8.33333H7.07769L6.33695 11.6667ZM7.44807 6.66667H12.5519L11.9964 4.16667H8.00362L7.44807 6.66667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default BarricadeLine;
