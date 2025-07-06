import React from 'react';

const ShareForward2Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M3.33366 15.8334H16.667V11.6667H18.3337V16.6667C18.3337 17.127 17.9606 17.5001 17.5003 17.5001H2.50033C2.04009 17.5001 1.66699 17.127 1.66699 16.6667V11.6667H3.33366V15.8334ZM10.0003 8.33342H7.50032C5.83734 8.33342 4.36397 9.14525 3.45496 10.3942C4.04892 7.32101 6.75358 5.00008 10.0003 5.00008V1.66675L16.667 6.66675L10.0003 11.6667V8.33342Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ShareForward2Fill;
