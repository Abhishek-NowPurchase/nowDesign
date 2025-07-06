import React from 'react';

const VideoOnFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M14.1663 7.66658L18.5108 4.62551C18.6993 4.49354 18.9591 4.53939 19.091 4.72792C19.14 4.79795 19.1663 4.88137 19.1663 4.96686V15.033C19.1663 15.2631 18.9798 15.4497 18.7497 15.4497C18.6642 15.4497 18.5808 15.4233 18.5108 15.3743L14.1663 12.3333V15.8333C14.1663 16.2935 13.7933 16.6666 13.333 16.6666H1.66634C1.20611 16.6666 0.833008 16.2935 0.833008 15.8333V4.16659C0.833008 3.70635 1.20611 3.33325 1.66634 3.33325H13.333C13.7933 3.33325 14.1663 3.70635 14.1663 4.16659V7.66658Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default VideoOnFill;
