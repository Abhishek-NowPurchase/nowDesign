import React from 'react';

const FileLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M7.5 1.66928V1.66663H16.6648C17.1261 1.66663 17.5 2.04605 17.5 2.49313V17.5068C17.5 17.9633 17.1292 18.3333 16.6722 18.3333H3.32783C2.87063 18.3333 2.5 17.9584 2.5 17.4943V6.66663L7.5 1.66928ZM4.85765 6.66663H7.5V4.02568L4.85765 6.66663ZM9.16667 3.33329V7.49996C9.16667 7.96019 8.79358 8.33329 8.33333 8.33329H4.16667V16.6666H15.8333V3.33329H9.16667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FileLine;
