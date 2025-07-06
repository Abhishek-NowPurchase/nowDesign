import React from 'react';

const ImageAddLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M17.5003 12.5V15H20.0003V16.6667H17.5003V19.1667H15.8337V16.6667H13.3337V15H15.8337V12.5H17.5003ZM17.5072 2.5C17.9637 2.5 18.3337 2.87079 18.3337 3.32783V10.8333H16.667V4.16667H3.33366V15.8325L11.667 7.5L14.167 10V12.3575L11.667 9.857L5.68949 15.8333H11.667V17.5H2.49349C2.03703 17.5 1.66699 17.1292 1.66699 16.6722V3.32783C1.66699 2.87063 2.04642 2.5 2.49349 2.5H17.5072ZM6.66699 5.83333C7.58747 5.83333 8.33366 6.57952 8.33366 7.5C8.33366 8.4205 7.58747 9.16667 6.66699 9.16667C5.74652 9.16667 5.00033 8.4205 5.00033 7.5C5.00033 6.57952 5.74652 5.83333 6.66699 5.83333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ImageAddLine;
