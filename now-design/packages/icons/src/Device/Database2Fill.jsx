import React from 'react';

const Database2Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M17.5 7.91667V10.4167C17.5 12.4878 14.1422 14.1667 10 14.1667C5.85787 14.1667 2.5 12.4878 2.5 10.4167V7.91667C2.5 9.98775 5.85787 11.6667 10 11.6667C14.1422 11.6667 17.5 9.98775 17.5 7.91667ZM2.5 12.0833C2.5 14.1544 5.85787 15.8333 10 15.8333C14.1422 15.8333 17.5 14.1544 17.5 12.0833V14.5833C17.5 16.6544 14.1422 18.3333 10 18.3333C5.85787 18.3333 2.5 16.6544 2.5 14.5833V12.0833ZM10 10C5.85787 10 2.5 8.32107 2.5 6.25C2.5 4.17893 5.85787 2.5 10 2.5C14.1422 2.5 17.5 4.17893 17.5 6.25C17.5 8.32107 14.1422 10 10 10Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Database2Fill;
