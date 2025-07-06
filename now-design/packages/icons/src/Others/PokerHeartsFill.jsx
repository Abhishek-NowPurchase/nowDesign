import React from 'react';

const PokerHeartsFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M1.66699 7.08333C1.66699 4.55203 3.71902 2.5 6.25032 2.5C7.80046 2.5 9.17082 3.26954 10.0003 4.44743C10.8298 3.26954 12.2002 2.5 13.7503 2.5C16.2817 2.5 18.3337 4.55203 18.3337 7.08333C18.3337 13.3333 10.0002 17.9043 10.0002 17.9043C10.0002 17.9043 1.66699 13.3333 1.66699 7.08333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default PokerHeartsFill;
