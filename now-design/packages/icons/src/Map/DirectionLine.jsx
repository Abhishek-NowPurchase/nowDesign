import React from 'react';

const DirectionLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9.99992 2.92896L2.92884 10L9.99992 17.0711L17.071 10L9.99992 2.92896ZM10.5892 1.1612L18.8388 9.4108C19.1642 9.73621 19.1642 10.2639 18.8388 10.5893L10.5892 18.8389C10.2638 19.1643 9.73609 19.1643 9.41068 18.8389L1.16107 10.5893C0.835632 10.2639 0.835632 9.73621 1.16107 9.4108L9.41068 1.1612C9.73609 0.835754 10.2638 0.835754 10.5892 1.1612ZM10.8333 8.33338V6.25003L13.7499 9.16671L10.8333 12.0834V10H8.33326V12.5H6.66657V9.16671C6.66657 8.70646 7.03967 8.33338 7.49991 8.33338H10.8333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default DirectionLine;
