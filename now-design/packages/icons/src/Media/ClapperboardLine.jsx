import React from 'react';

const ClapperboardLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M4.99872 5.83333L6.92322 2.5H9.99874L8.07422 5.83333H4.99872ZM9.99874 5.83333L11.9232 2.5H14.9987L13.0742 5.83333H9.99874ZM14.9987 5.83333L16.9232 2.5H17.5072C17.9637 2.5 18.3337 2.87079 18.3337 3.32783V16.6722C18.3337 17.1293 17.9542 17.5 17.5072 17.5H2.49349C2.03703 17.5 1.66699 17.1292 1.66699 16.6722V3.32783C1.66699 2.87063 2.04642 2.5 2.49349 2.5H4.99872L3.33366 5.38397V15.8333H16.667V5.83333H14.9987Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ClapperboardLine;
