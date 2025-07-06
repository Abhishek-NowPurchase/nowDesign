import React from 'react';

const MenuUnfold2Line = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M17.163 3.25281L13.3328 7.08297L17.163 10.9131L18.3415 9.73462L15.6898 7.08297L18.3415 4.43132L17.163 3.25281ZM17.5 16.6663V14.9996H2.5V16.6663H17.5ZM10 10.833V9.16629H2.5V10.833H10ZM10 4.99963V3.33297H2.5V4.99963H10Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MenuUnfold2Line;
