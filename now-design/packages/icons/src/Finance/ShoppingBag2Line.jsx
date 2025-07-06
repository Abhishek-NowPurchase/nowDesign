import React from 'react';

const ShoppingBag2Line = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M16.6706 18.3333H3.33724C2.87701 18.3333 2.50391 17.9602 2.50391 17.5V2.49996C2.50391 2.03973 2.87701 1.66663 3.33724 1.66663H16.6706C17.1308 1.66663 17.5039 2.03973 17.5039 2.49996V17.5C17.5039 17.9602 17.1308 18.3333 16.6706 18.3333ZM15.8373 16.6666V3.33329H4.17057V16.6666H15.8373ZM7.50391 4.99996V6.66663C7.50391 8.04733 8.62317 9.16662 10.0039 9.16662C11.3846 9.16662 12.5039 8.04733 12.5039 6.66663V4.99996H14.1706V6.66663C14.1706 8.96779 12.3051 10.8333 10.0039 10.8333C7.70272 10.8333 5.83724 8.96779 5.83724 6.66663V4.99996H7.50391Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ShoppingBag2Line;
