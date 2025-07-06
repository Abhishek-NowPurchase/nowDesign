import React from 'react';

const ArtboardLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M7.15482 14.1667H2.5V12.5H17.5V14.1667H12.8452L15.5474 16.8688L14.3688 18.0474L10.8333 14.5118V16.6667H9.16667V14.5118L5.63113 18.0474L4.45263 16.8688L7.15482 14.1667ZM4.16667 2.5H15.8333C16.2936 2.5 16.6667 2.8731 16.6667 3.33333V11.6667H3.33333V3.33333C3.33333 2.8731 3.70643 2.5 4.16667 2.5ZM5 4.16667V10H15V4.16667H5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArtboardLine;
