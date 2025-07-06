import React from 'react';

const NoCreditCardLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M16.3214 17.5L17.6603 18.8389L18.8388 17.6604L2.33965 1.16125L1.16113 2.33976L1.76629 2.94491C1.70507 3.0609 1.67041 3.19308 1.67041 3.33335V16.6667C1.67041 17.1269 2.04351 17.5 2.50374 17.5H16.3214ZM14.6548 15.8334H3.33707V10H8.82142L14.6548 15.8334ZM5.48806 6.66669H3.33707V4.5157L5.48806 6.66669ZM18.3371 3.33335V14.8019L16.6704 13.1352V10H13.5353L10.2019 6.66669H16.6704V4.16669H7.70193L6.03527 2.50002H17.5038C17.964 2.50002 18.3371 2.87311 18.3371 3.33335Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default NoCreditCardLine;
