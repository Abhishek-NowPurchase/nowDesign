import React from 'react';

const PencilRulerLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M4.16667 6.66663V16.6666H7.5V6.66663H4.16667ZM2.5 5.83329L5.83333 1.66663L9.16667 5.83329V18.3333H2.5V5.83329ZM15.8333 13.3333V11.6666H13.3333V9.99996H15.8333V8.33329H14.1667V6.66663H15.8333V4.99996H12.5V16.6666H15.8333V15H14.1667V13.3333H15.8333ZM11.6667 3.33329H16.6667C17.1269 3.33329 17.5 3.70639 17.5 4.16663V17.5C17.5 17.9602 17.1269 18.3333 16.6667 18.3333H11.6667C11.2064 18.3333 10.8333 17.9602 10.8333 17.5V4.16663C10.8333 3.70639 11.2064 3.33329 11.6667 3.33329Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default PencilRulerLine;
