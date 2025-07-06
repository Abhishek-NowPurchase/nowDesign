import React from 'react';

const FolderCheckFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M15.8332 10.8333C16.7439 10.8333 17.5978 11.0768 18.3332 11.5022V5C18.3332 4.53977 17.9601 4.16667 17.4998 4.16667H10.345L8.67834 2.5H2.49984C2.0396 2.5 1.6665 2.8731 1.6665 3.33333V16.6667C1.6665 17.1269 2.0396 17.5 2.49984 17.5H11.1177C10.9334 16.9787 10.8332 16.4177 10.8332 15.8333C10.8332 13.0719 13.0718 10.8333 15.8332 10.8333ZM12.8869 15.3872L15.8332 18.3335L19.9579 14.2087L18.7794 13.0302L15.8332 15.9765L14.0654 14.2087L12.8869 15.3872Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FolderCheckFill;
