import React from 'react';

const FacesAccountPinBoxFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M11.6667 17.5L10 19.1667L8.33333 17.5H4.16258C3.24436 17.5 2.5 16.7562 2.5 15.8374V4.16257C2.5 3.24436 3.24385 2.5 4.16258 2.5H15.8374C16.7557 2.5 17.5 3.24385 17.5 4.16257V15.8374C17.5 16.7557 16.7562 17.5 15.8374 17.5H11.6667ZM5.29739 15H14.8729C13.8187 13.4887 12.0674 12.5 10.0852 12.5C8.10287 12.5 6.35152 13.4887 5.29739 15ZM10 10.8333C11.6108 10.8333 12.9167 9.5275 12.9167 7.91667C12.9167 6.30583 11.6108 5 10 5C8.38917 5 7.08333 6.30583 7.08333 7.91667C7.08333 9.5275 8.38917 10.8333 10 10.8333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FacesAccountPinBoxFill;
