import React from 'react';

const ProfileFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M1.66675 3.32783C1.66675 2.87063 2.04617 2.5 2.49325 2.5H17.5069C17.9634 2.5 18.3334 2.87079 18.3334 3.32783V16.6722C18.3334 17.1293 17.954 17.5 17.5069 17.5H2.49325C2.03679 17.5 1.66675 17.1292 1.66675 16.6722V3.32783ZM5.00008 12.5V14.1667H15.0001V12.5H5.00008ZM5.00008 5.83333V10.8333H10.0001V5.83333H5.00008ZM11.6667 5.83333V7.5H15.0001V5.83333H11.6667ZM11.6667 9.16667V10.8333H15.0001V9.16667H11.6667ZM6.66675 7.5H8.33341V9.16667H6.66675V7.5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ProfileFill;
