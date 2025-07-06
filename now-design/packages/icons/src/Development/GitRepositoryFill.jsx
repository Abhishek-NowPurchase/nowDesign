import React from 'react';

const GitRepositoryFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.8333 17.5V19.5833L8.33333 17.9166L5.83333 19.5833V17.5H5.41667C3.80583 17.5 2.5 16.1941 2.5 14.5833V4.16663C2.5 2.78592 3.61929 1.66663 5 1.66663H16.6667C17.1269 1.66663 17.5 2.03973 17.5 2.49996V16.6666C17.5 17.1269 17.1269 17.5 16.6667 17.5H10.8333ZM5.83333 15.8333V14.1666H10.8333V15.8333H15.8333V13.3333H5.41667C4.72631 13.3333 4.16667 13.893 4.16667 14.5833C4.16667 15.2736 4.72631 15.8333 5.41667 15.8333H5.83333ZM5.83333 4.16663V5.83329H7.5V4.16663H5.83333ZM5.83333 6.66663V8.33329H7.5V6.66663H5.83333ZM5.83333 9.16662V10.8333H7.5V9.16662H5.83333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default GitRepositoryFill;
