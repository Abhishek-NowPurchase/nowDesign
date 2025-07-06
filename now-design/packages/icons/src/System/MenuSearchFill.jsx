import React from 'react';

const MenuSearchFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M15.5146 10.8598C14.7763 11.3687 13.8813 11.6667 12.9167 11.6667C10.3853 11.6667 8.33333 9.61467 8.33333 7.08333C8.33333 4.55203 10.3853 2.5 12.9167 2.5C15.448 2.5 17.5 4.55203 17.5 7.08333C17.5 8.04792 17.202 8.94292 16.6931 9.68125L18.9226 11.9108L17.7441 13.0893L15.5146 10.8598ZM2.5 3.33333H6.66667V5H2.5V3.33333ZM2.5 9.16667H6.66667V10.8333H2.5V9.16667ZM2.5 15H17.5V16.6667H2.5V15Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MenuSearchFill;
