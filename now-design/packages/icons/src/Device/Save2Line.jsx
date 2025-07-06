import React from 'react';

const Save2Line = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M4.16667 4.16667V15.8333H15.8333V6.52369L13.4763 4.16667H4.16667ZM3.33333 2.5H14.1667L17.2559 5.58926C17.4122 5.74553 17.5 5.9575 17.5 6.17851V16.6667C17.5 17.1269 17.1269 17.5 16.6667 17.5H3.33333C2.8731 17.5 2.5 17.1269 2.5 16.6667V3.33333C2.5 2.8731 2.8731 2.5 3.33333 2.5ZM10 15C8.61925 15 7.5 13.8807 7.5 12.5C7.5 11.1192 8.61925 10 10 10C11.3807 10 12.5 11.1192 12.5 12.5C12.5 13.8807 11.3807 15 10 15ZM5 5H12.5V8.33333H5V5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Save2Line;
