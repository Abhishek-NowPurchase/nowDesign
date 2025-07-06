import React from 'react';

const ExpandHorizontalFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M0.416672 10L4.54146 5.87529L4.54064 9.16671H8.33334V10.8334H4.54022L4.5394 14.1228L0.416672 10ZM11.6667 10.8334H15.4584L15.4583 14.1245L19.5833 9.99971L15.4586 5.87488L15.4585 9.16671H11.6667V10.8334Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ExpandHorizontalFill;
