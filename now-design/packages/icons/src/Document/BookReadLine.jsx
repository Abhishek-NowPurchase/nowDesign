import React from 'react';

const BookReadLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M1.6665 3.32783C1.6665 2.87063 2.04593 2.5 2.493 2.5H17.5067C17.9632 2.5 18.3332 2.87079 18.3332 3.32783V16.6722C18.3332 17.1293 17.9538 17.5 17.5067 17.5H2.493C2.03655 17.5 1.6665 17.1292 1.6665 16.6722V3.32783ZM9.1665 4.16667H3.33317V15.8333H9.1665V4.16667ZM10.8332 4.16667V15.8333H16.6665V4.16667H10.8332ZM11.6665 5.83333H15.8332V7.5H11.6665V5.83333ZM11.6665 8.33333H15.8332V10H11.6665V8.33333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default BookReadLine;
