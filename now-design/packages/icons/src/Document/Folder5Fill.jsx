import React from 'react';

const Folder5Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M11.1788 4.16667H16.667C17.1273 4.16667 17.5003 4.53977 17.5003 5V5.83333H2.50031V3.33333C2.50031 2.8731 2.87341 2.5 3.33364 2.5H9.51217L11.1788 4.16667ZM2.57264 7.5H17.428C17.8883 7.5 18.2613 7.8731 18.2613 8.33333C18.2613 8.35642 18.2603 8.3795 18.2584 8.4025L17.564 16.7358C17.528 17.1677 17.1669 17.5 16.7335 17.5H3.26708C2.83367 17.5 2.47262 17.1677 2.43663 16.7358L1.74218 8.4025C1.70397 7.94389 2.04479 7.5411 2.50343 7.50288C2.52646 7.50096 2.54954 7.5 2.57264 7.5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Folder5Fill;
