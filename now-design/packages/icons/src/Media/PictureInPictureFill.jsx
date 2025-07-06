import React from 'react';

const PictureInPictureFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M17.5003 2.5C17.9606 2.5 18.3337 2.8731 18.3337 3.33333V9.16667H16.667V4.16667H3.33366V15.8333H8.33366V17.5H2.50033C2.04009 17.5 1.66699 17.1269 1.66699 16.6667V3.33333C1.66699 2.8731 2.04009 2.5 2.50033 2.5H17.5003ZM17.5003 10.8333C17.9606 10.8333 18.3337 11.2064 18.3337 11.6667V16.6667C18.3337 17.1269 17.9606 17.5 17.5003 17.5H10.8337C10.3734 17.5 10.0003 17.1269 10.0003 16.6667V11.6667C10.0003 11.2064 10.3734 10.8333 10.8337 10.8333H17.5003Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default PictureInPictureFill;
