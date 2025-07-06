import React from 'react';

const TwitchLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M3.58431 2.5H17.501V12.25L13.5843 16.1667H10.3343L8.25098 18.1667H5.83431V16.1667H2.50098V5.16667L3.58431 2.5ZM4.16764 14.5H7.50098V16.5H7.58046L9.66383 14.5H12.8939L15.8343 11.5597V4.16667H4.16764V14.5ZM12.501 6.66667H14.1677V10.5833H12.501V6.66667ZM12.501 6.66667H14.1677V10.5833H12.501V6.66667ZM8.33433 6.66667H10.001V10.5833H8.33433V6.66667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default TwitchLine;
