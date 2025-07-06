import React from 'react';

const HomeSmile2Line = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M15.8333 15.8333V8.16561L10 3.56394L4.16667 8.16561V15.8333H15.8333ZM17.5 16.6666C17.5 17.1269 17.1269 17.5 16.6667 17.5H3.33333C2.8731 17.5 2.5 17.1269 2.5 16.6666V7.76157C2.5 7.50642 2.61689 7.26534 2.81721 7.10731L9.48392 1.84826C9.7865 1.6095 10.2135 1.6095 10.5161 1.84826L17.1828 7.10731C17.3831 7.26534 17.5 7.50642 17.5 7.76157V16.6666ZM5.83333 9.99998H7.5C7.5 11.3807 8.61925 12.5 10 12.5C11.3807 12.5 12.5 11.3807 12.5 9.99998H14.1667C14.1667 12.3011 12.3012 14.1666 10 14.1666C7.69882 14.1666 5.83333 12.3011 5.83333 9.99998Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default HomeSmile2Line;
