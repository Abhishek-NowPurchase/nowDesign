import React from 'react';

const MicrosoftLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9.16766 4.16667H4.16764V9.16667H9.16766V4.16667ZM10.8343 4.16667V9.16667H15.8343V4.16667H10.8343ZM15.8343 10.8333H10.8343V15.8333H15.8343V10.8333ZM9.16766 15.8333V10.8333H4.16764V15.8333H9.16766ZM2.50098 2.5H17.501V17.5H2.50098V2.5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MicrosoftLine;
