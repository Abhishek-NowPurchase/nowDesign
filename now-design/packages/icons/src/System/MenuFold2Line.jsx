import React from 'react';

const MenuFold2Line = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M3.66972 3.25281L2.49121 4.43132L5.14286 7.08297L2.49121 9.73462L3.66972 10.9131L7.49989 7.08297L3.66972 3.25281ZM17.4999 16.6663V14.9996H2.49989V16.6663H17.4999ZM17.4999 10.833V9.16629H9.99991V10.833H17.4999ZM17.4999 4.99963V3.33297H9.99991V4.99963H17.4999Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MenuFold2Line;
