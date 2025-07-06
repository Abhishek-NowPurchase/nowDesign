import React from 'react';

const TwitterXLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M8.73993 12.2092L12.708 17.5H18.5413L11.9928 8.76858L17.442 2.5H15.2337L10.9699 7.40482L7.29134 2.5H1.45801L7.71706 10.8454L1.9323 17.5H4.14065L8.73993 12.2092ZM13.5413 15.8333L4.79134 4.16667H6.45801L15.208 15.8333H13.5413Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default TwitterXLine;
