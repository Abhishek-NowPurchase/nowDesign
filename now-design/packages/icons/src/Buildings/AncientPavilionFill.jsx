import React from 'react';

const AncientPavilionFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M1.26324 6.56394C1.39999 8.19143 2.57435 9.54329 4.16674 9.90621V15.8344H2.50007V17.501H17.5001V15.8344H15.8334V9.90621C17.4258 9.54329 18.6002 8.19143 18.7369 6.56394C18.3282 6.63228 17.9144 6.66663 17.5001 6.66663C14.3217 6.66663 11.4884 4.66323 10.429 1.66663H9.5711C8.51169 4.66323 5.67844 6.66663 2.50007 6.66663C2.08567 6.66663 1.67198 6.63228 1.26324 6.56394ZM14.1668 15.8344H5.8334V9.99996H14.1668V15.8344Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default AncientPavilionFill;
