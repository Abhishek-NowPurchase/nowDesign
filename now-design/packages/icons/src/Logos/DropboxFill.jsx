import React from 'react';

const DropboxFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M14.4039 8.89029L18.75 11.6591L14.3733 14.4474L10 11.6612L5.62665 14.4474L1.25 11.6591L5.596 8.89037L1.25 6.1216L5.62672 3.33337L9.99992 6.1195L14.3734 3.33337L18.75 6.1216L14.4039 8.89029ZM14.3427 8.89037L9.99992 6.12371L5.65724 8.89029L10 11.657L14.3427 8.89037ZM5.65478 15.3714L10.0314 12.5834L14.4082 15.3714L10.0314 18.1597L5.65478 15.3714Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default DropboxFill;
