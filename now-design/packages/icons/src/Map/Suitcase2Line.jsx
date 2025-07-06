import React from 'react';

const Suitcase2Line = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M15 19.1666H13.3333V18.3333H6.66667V19.1666H5V18.3333H4.16667C3.24619 18.3333 2.5 17.5871 2.5 16.6666V5.83329C2.5 4.91282 3.24619 4.16663 4.16667 4.16663H6.66667V2.49996C6.66667 2.03973 7.03977 1.66663 7.5 1.66663H12.5C12.9602 1.66663 13.3333 2.03973 13.3333 2.49996V4.16663H15.8333C16.7538 4.16663 17.5 4.91282 17.5 5.83329V16.6666C17.5 17.5871 16.7538 18.3333 15.8333 18.3333H15V19.1666ZM15.8333 5.83329H4.16667V16.6666H15.8333V5.83329ZM8.33333 7.49996V15H6.66667V7.49996H8.33333ZM13.3333 7.49996V15H11.6667V7.49996H13.3333ZM11.6667 3.33329H8.33333V4.16663H11.6667V3.33329Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Suitcase2Line;
