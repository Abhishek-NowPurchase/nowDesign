import React from 'react';

const KeyFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M14.1663 11.6667H10.5485C9.86209 13.6087 8.01004 15 5.83301 15C3.07158 15 0.833008 12.7614 0.833008 10C0.833008 7.23857 3.07158 5 5.83301 5C8.01004 5 9.86209 6.39135 10.5485 8.33333H19.1663V11.6667H17.4997V15H14.1663V11.6667ZM5.83301 11.6667C6.75348 11.6667 7.49968 10.9205 7.49968 10C7.49968 9.0795 6.75348 8.33333 5.83301 8.33333C4.91253 8.33333 4.16634 9.0795 4.16634 10C4.16634 10.9205 4.91253 11.6667 5.83301 11.6667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default KeyFill;
