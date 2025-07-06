import React from 'react';

const ArchiveDrawerFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M2.5 10.8333H17.5V17.502C17.5 17.9611 17.1292 18.3333 16.6722 18.3333H3.32783C2.87063 18.3333 2.5 17.9614 2.5 17.502V10.8333ZM2.5 2.49791C2.5 2.03881 2.87079 1.66663 3.32783 1.66663H16.6722C17.1293 1.66663 17.5 2.03855 17.5 2.49791V9.16662H2.5V2.49791ZM7.5 4.16663V5.83329H12.5V4.16663H7.5ZM7.5 13.3333V15H12.5V13.3333H7.5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArchiveDrawerFill;
