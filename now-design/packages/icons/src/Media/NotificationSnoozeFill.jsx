import React from 'react';

const NotificationSnoozeFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M18.3337 14.1666H16.667V8.33329C16.667 4.65139 13.6822 1.66663 10.0003 1.66663C6.31842 1.66663 3.33366 4.65139 3.33366 8.33329V14.1666H1.66699V15.8333H18.3337V14.1666ZM12.5003 19.1666V17.5H7.50032V19.1666H12.5003ZM7.50032 7.49996V5.83329H12.5003V7.84513L9.51216 10.8333H12.5003V12.5H7.50032V10.4881L10.4885 7.49996H7.50032Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default NotificationSnoozeFill;
