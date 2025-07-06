import React from 'react';

const FriendicaFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M12.5003 2.49996V6.24996H7.50032V9.58329H12.5003V13.75H7.50032V17.5H15.0003C16.3811 17.5 17.5003 16.3807 17.5003 15V4.99996C17.5003 3.61925 16.3811 2.49996 15.0003 2.49996H12.5003ZM1.66699 4.99996C1.66699 3.15901 3.15938 1.66663 5.00032 1.66663H15.0003C16.8412 1.66663 18.3337 3.15901 18.3337 4.99996V15C18.3337 16.8409 16.8412 18.3333 15.0003 18.3333H5.00032C3.15938 18.3333 1.66699 16.8409 1.66699 15V4.99996Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FriendicaFill;
