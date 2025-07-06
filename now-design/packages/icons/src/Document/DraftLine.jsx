import React from 'react';

const DraftLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M16.6667 1.66663C17.1269 1.66663 17.5 2.03973 17.5 2.49996V5.63079L15.8333 7.29746V3.33329H4.16667V16.6666H15.8333V14.3683L17.5 12.7016V17.5C17.5 17.9602 17.1269 18.3333 16.6667 18.3333H3.33333C2.8731 18.3333 2.5 17.9602 2.5 17.5V2.49996C2.5 2.03973 2.8731 1.66663 3.33333 1.66663H16.6667ZM18.1485 7.33963L19.327 8.51812L12.8452 15L11.6649 14.9982L11.6667 13.8215L18.1485 7.33963ZM10.8333 9.99996V11.6666H6.66667V9.99996H10.8333ZM13.3333 6.66663V8.33329H6.66667V6.66663H13.3333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default DraftLine;
