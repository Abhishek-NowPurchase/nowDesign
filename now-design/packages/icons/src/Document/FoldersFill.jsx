import React from 'react';

const FoldersFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M4.99984 5.83333V3.33333C4.99984 2.8731 5.37294 2.5 5.83317 2.5H11.1783L12.845 4.16667H17.4998C17.9601 4.16667 18.3332 4.53977 18.3332 5V13.3333C18.3332 13.7936 17.9601 14.1667 17.4998 14.1667H14.9998V16.6667C14.9998 17.1269 14.6268 17.5 14.1665 17.5H2.49984C2.0396 17.5 1.6665 17.1269 1.6665 16.6667V6.66667C1.6665 6.20643 2.0396 5.83333 2.49984 5.83333H4.99984ZM4.99984 7.5H3.33317V15.8333H13.3332V14.1667H4.99984V7.5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FoldersFill;
