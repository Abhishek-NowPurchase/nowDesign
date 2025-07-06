import React from 'react';

const FileEditLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M17.5 5.63109L15.8333 7.29776V3.33329H8.33333V7.49996H4.16667V16.6666H15.8333V14.3688L17.5 12.7021V17.5068C17.5 17.9633 17.1292 18.3333 16.6722 18.3333H3.32783C2.87063 18.3333 2.5 17.9584 2.5 17.4943V6.66663L7.50266 1.66663H16.6648C17.1261 1.66663 17.5 2.04605 17.5 2.49313V5.63109ZM18.1485 7.33963L19.327 8.51812L12.8452 15L11.6649 14.9982L11.6667 13.8215L18.1485 7.33963Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FileEditLine;
