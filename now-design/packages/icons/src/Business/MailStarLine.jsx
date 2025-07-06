import React from 'react';

const MailStarLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M18.3334 10.8333H16.6667V6.0316L10.0599 11.9483L3.33341 6.01328V15.8333H11.6667V17.5H2.50008C2.03985 17.5 1.66675 17.1269 1.66675 16.6667V3.33333C1.66675 2.8731 2.03985 2.5 2.50008 2.5H17.5001C17.9603 2.5 18.3334 2.8731 18.3334 3.33333V10.8333ZM3.75963 4.16667L10.0517 9.71833L16.2509 4.16667H3.75963ZM16.2501 18.125L14.0459 19.2838L14.4668 16.8294L12.6836 15.0912L15.148 14.7331L16.2501 12.5L17.3522 14.7331L19.8166 15.0912L18.0333 16.8294L18.4542 19.2838L16.2501 18.125Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MailStarLine;
