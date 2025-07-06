import React from 'react';

const ShieldKeyholeFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10 0.833252L16.8474 2.3549C17.2287 2.43964 17.5 2.77781 17.5 3.16839V11.4907C17.5 13.1624 16.6645 14.7236 15.2735 15.6509L10 19.1666L4.7265 15.6509C3.33551 14.7236 2.5 13.1624 2.5 11.4907V3.16839C2.5 2.77781 2.77128 2.43964 3.15256 2.3549L10 0.833252ZM10 5.83325C9.0795 5.83325 8.33333 6.57944 8.33333 7.49992C8.33333 8.11679 8.6685 8.65542 9.16658 8.94359L9.16667 12.4999H10.8333L10.8342 8.94309C11.3319 8.65475 11.6667 8.11645 11.6667 7.49992C11.6667 6.57944 10.9205 5.83325 10 5.83325Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ShieldKeyholeFill;
