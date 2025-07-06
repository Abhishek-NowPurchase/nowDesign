import React from 'react';

const FileCopyFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M5.83317 4.99996V2.49996C5.83317 2.03973 6.20627 1.66663 6.6665 1.66663H16.6665C17.1267 1.66663 17.4998 2.03973 17.4998 2.49996V14.1666C17.4998 14.6269 17.1267 15 16.6665 15H14.1665V17.4992C14.1665 17.9599 13.7916 18.3333 13.3275 18.3333H3.33888C2.87549 18.3333 2.5 17.9628 2.5 17.4992L2.50217 5.83402C2.50225 5.37338 2.8772 4.99996 3.34118 4.99996H5.83317ZM7.49983 4.99996H14.1665V13.3333H15.8332V3.33329H7.49983V4.99996Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FileCopyFill;
