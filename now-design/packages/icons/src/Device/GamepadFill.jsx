import React from 'react';

const GamepadFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M14.1668 3.33337C16.9282 3.33337 19.1668 5.57195 19.1668 8.33337V11.6667C19.1668 14.4281 16.9282 16.6667 14.1668 16.6667H5.8335C3.07207 16.6667 0.833496 14.4281 0.833496 11.6667V8.33337C0.833496 5.57195 3.07207 3.33337 5.8335 3.33337H14.1668ZM8.3335 7.50004H6.66683V9.16671H5.00016V10.8334H6.666L6.66683 12.5H8.3335L8.33266 10.8334H10.0002V9.16671H8.3335V7.50004ZM15.0002 10.8334H13.3335V12.5H15.0002V10.8334ZM13.3335 7.50004H11.6668V9.16671H13.3335V7.50004Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default GamepadFill;
