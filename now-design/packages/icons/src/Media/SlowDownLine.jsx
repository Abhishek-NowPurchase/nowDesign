import React from 'react';

const SlowDownLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M3.33366 10.8333C3.33366 12.6742 4.07985 14.3409 5.28628 15.5474L4.10777 16.7259C2.59973 15.2178 1.66699 13.1345 1.66699 10.8333C1.66699 6.23096 5.39795 2.5 10.0003 2.5C14.6027 2.5 18.3337 6.23096 18.3337 10.8333C18.3337 13.1345 17.4009 15.2178 15.8929 16.7259L14.7144 15.5474C15.9208 14.3409 16.667 12.6742 16.667 10.8333C16.667 7.15143 13.6822 4.16667 10.0003 4.16667C6.31842 4.16667 3.33366 7.15143 3.33366 10.8333ZM7.25618 6.91081L11.0062 10.6608L9.82766 11.8393L6.07767 8.08932L7.25618 6.91081Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default SlowDownLine;
