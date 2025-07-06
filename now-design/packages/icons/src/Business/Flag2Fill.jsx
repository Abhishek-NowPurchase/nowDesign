import React from 'react';

const Flag2Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M1.66663 2.5H17.6153C17.8455 2.5 18.032 2.68655 18.032 2.91667C18.032 2.98918 18.013 3.06043 17.977 3.12339L15 8.33333L17.977 13.5433C18.0912 13.7431 18.0218 13.9976 17.822 14.1118C17.759 14.1478 17.6878 14.1667 17.6153 14.1667H3.33329V18.3333H1.66663V2.5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Flag2Fill;
