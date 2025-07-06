import React from 'react';

const LeafFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M17.498 2.5V4.16667C17.498 12.1895 13.0209 15.8333 7.49805 15.8333L5.91334 15.8333C6.08959 13.323 6.87085 11.804 8.91125 9.99908C9.91459 9.1115 9.83009 8.59908 9.33542 8.89342C5.93242 10.918 4.24229 13.6552 4.16733 18.0252L4.16471 18.3333H2.49805C2.49805 17.1978 2.59447 16.1664 2.78618 15.2235C2.59409 14.1451 2.49805 12.6813 2.49805 10.8333C2.49805 6.23096 6.22901 2.5 10.8313 2.5C12.498 2.5 14.1647 3.33333 17.498 2.5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default LeafFill;
