import React from 'react';

const KeyboardBoxLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M3.33317 4.16667V15.8333H16.6665V4.16667H3.33317ZM2.49984 2.5H17.4998C17.9601 2.5 18.3332 2.8731 18.3332 3.33333V16.6667C18.3332 17.1269 17.9601 17.5 17.4998 17.5H2.49984C2.0396 17.5 1.6665 17.1269 1.6665 16.6667V3.33333C1.6665 2.8731 2.0396 2.5 2.49984 2.5ZM4.99984 5.83333H6.6665V7.5H4.99984V5.83333ZM4.99984 9.16667H6.6665V10.8333H4.99984V9.16667ZM4.99984 12.5H14.9998V14.1667H4.99984V12.5ZM9.1665 9.16667H10.8332V10.8333H9.1665V9.16667ZM9.1665 5.83333H10.8332V7.5H9.1665V5.83333ZM13.3332 5.83333H14.9998V7.5H13.3332V5.83333ZM13.3332 9.16667H14.9998V10.8333H13.3332V9.16667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default KeyboardBoxLine;
