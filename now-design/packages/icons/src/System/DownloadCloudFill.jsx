import React from 'react';

const DownloadCloudFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M5.83301 17.4842C3.03616 17.2714 0.833008 14.9346 0.833008 12.0833C0.833008 10.143 1.85325 8.44088 3.38656 7.48429C3.80358 4.20329 6.60539 1.66663 9.99968 1.66663C13.3939 1.66663 16.1958 4.20329 16.6128 7.48429C18.1461 8.44088 19.1663 10.143 19.1663 12.0833C19.1663 14.9346 16.9632 17.2714 14.1663 17.4842V17.5H5.83301V17.4842ZM10.833 9.99996V6.66663H9.16634V9.99996H6.66634L9.99968 14.1666L13.333 9.99996H10.833Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default DownloadCloudFill;
