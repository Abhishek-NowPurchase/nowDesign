import React from 'react';

const Slideshow3Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.8333 15V16.6667H14.1666V18.3333H5.83329V16.6667H9.16662V15H2.49996C2.03973 15 1.66663 14.6269 1.66663 14.1667V3.33333C1.66663 2.8731 2.03973 2.5 2.49996 2.5H17.5C17.9602 2.5 18.3333 2.8731 18.3333 3.33333V14.1667C18.3333 14.6269 17.9602 15 17.5 15H10.8333ZM8.33329 6.25V11.25L12.5 8.75L8.33329 6.25Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Slideshow3Fill;
