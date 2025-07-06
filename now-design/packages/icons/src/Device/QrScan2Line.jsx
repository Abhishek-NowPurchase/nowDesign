import React from 'react';

const QrScan2Line = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M12.5 2.5H17.5V6.66667H15.8333V4.16667H12.5V2.5ZM7.5 2.5V4.16667H4.16667V6.66667H2.5V2.5H7.5ZM12.5 17.5V15.8333H15.8333V13.3333H17.5V17.5H12.5ZM7.5 17.5H2.5V13.3333H4.16667V15.8333H7.5V17.5ZM2.5 9.16667H17.5V10.8333H2.5V9.16667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default QrScan2Line;
