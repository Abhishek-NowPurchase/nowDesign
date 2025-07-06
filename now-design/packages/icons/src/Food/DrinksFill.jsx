import React from 'react';

const DrinksFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M11.667 1.66667H5.17112C4.67457 1.66667 4.24706 2.01714 4.14968 2.50404L3.48383 5.83333H1.66699V7.5H3.42428H16.5763H18.3337V5.83333H16.5168L15.851 2.50404C15.7536 2.01714 15.3261 1.66667 14.8295 1.66667H13.3337V0H11.667V1.66667ZM16.3841 9.16667H3.61659L4.56787 17.4111C4.62852 17.9367 5.07357 18.3333 5.60267 18.3333H14.398C14.9271 18.3333 15.3722 17.9367 15.4327 17.4111L16.3841 9.16667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default DrinksFill;
