import React from 'react';

const CakeFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.833 5.83323V9.16654H16.6663C17.1266 9.16654 17.4997 9.53963 17.4997 9.99988V16.6665H19.1663V18.3332H0.833008V16.6665H2.49967V9.99988C2.49967 9.53963 2.87277 9.16654 3.33301 9.16654H9.16634V5.83323H10.833ZM11.5248 0.334839C12.2152 1.53057 11.8054 3.05954 10.6098 3.7499L9.16634 4.58323C8.47601 3.3875 8.88568 1.85853 10.0814 1.16818L11.5248 0.334839Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default CakeFill;
