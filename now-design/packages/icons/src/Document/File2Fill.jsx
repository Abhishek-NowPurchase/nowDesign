import React from 'react';

const File2Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M2.5 7.49996H7.5C7.96023 7.49996 8.33333 7.12686 8.33333 6.66663V1.66663H16.6681C17.1276 1.66663 17.5 2.04605 17.5 2.49313V17.5068C17.5 17.9633 17.1292 18.3333 16.6722 18.3333H3.32783C2.87063 18.3333 2.5 17.9592 2.5 17.4937V7.49996ZM2.5 5.83329L6.66667 1.66928V5.83329H2.5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default File2Fill;
