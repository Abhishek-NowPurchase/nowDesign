import React from 'react';

const RulerFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M4.10759 11.0949L5.87536 12.8626L7.05388 11.6841L5.28611 9.91638L7.05388 8.14862L9.41092 10.5056L10.5894 9.32713L8.23239 6.97011L10.0002 5.20234L11.7679 6.97011L12.9464 5.7916L11.1787 4.02383L13.5357 1.66681C13.8611 1.34137 14.3888 1.34137 14.7142 1.66681L18.839 5.7916C19.1644 6.11703 19.1644 6.64467 18.839 6.97011L6.46462 19.3445C6.13918 19.6699 5.61154 19.6699 5.28611 19.3445L1.16132 15.2197C0.835876 14.8942 0.835876 14.3666 1.16132 14.0412L4.10759 11.0949Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default RulerFill;
