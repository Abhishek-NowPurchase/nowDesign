import React from 'react';

const FileImageFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M17.5 5.83329L13.3333 1.66663H3.32783C2.87079 1.66663 2.5 2.03667 2.5 2.49313V17.5068C2.5 17.9539 2.87063 18.3333 3.32783 18.3333H16.6722C17.1292 18.3333 17.5 17.9633 17.5 17.5068V5.83329ZM9.16667 7.91663C9.16667 8.60696 8.607 9.16662 7.91667 9.16662C7.22631 9.16662 6.66667 8.60696 6.66667 7.91663C6.66667 7.22627 7.22631 6.66663 7.91667 6.66663C8.607 6.66663 9.16667 7.22627 9.16667 7.91663ZM14.5833 14.1666H6.66667L11.25 8.33329L14.5833 14.1666Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FileImageFill;
