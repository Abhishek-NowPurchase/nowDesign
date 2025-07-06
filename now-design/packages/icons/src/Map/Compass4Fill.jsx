import React from 'react';

const Compass4Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.0003 18.3333C5.39795 18.3333 1.66699 14.6023 1.66699 9.99996C1.66699 5.39758 5.39795 1.66663 10.0003 1.66663C14.6027 1.66663 18.3337 5.39758 18.3337 9.99996C18.3337 14.6023 14.6027 18.3333 10.0003 18.3333ZM12.8722 8.30665C12.5853 7.82128 12.179 7.41494 11.6937 7.12814L7.12851 11.6933C7.41531 12.1786 7.82165 12.585 8.30702 12.8718L12.8722 8.30665Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Compass4Fill;
