import React from 'react';

const FacesWomenLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9.16667 13.2783C6.10887 12.8709 3.75 10.2526 3.75 7.08337C3.75 3.63159 6.54822 0.833374 10 0.833374C13.4517 0.833374 16.25 3.63159 16.25 7.08337C16.25 10.2526 13.8912 12.8709 10.8333 13.2783V15H15V16.6667H10.8333V20H9.16667V16.6667H5V15H9.16667V13.2783ZM10 11.6667C12.5313 11.6667 14.5833 9.61471 14.5833 7.08337C14.5833 4.55207 12.5313 2.50004 10 2.50004C7.46869 2.50004 5.41667 4.55207 5.41667 7.08337C5.41667 9.61471 7.46869 11.6667 10 11.6667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FacesWomenLine;
