import React from 'react';

const Cloudy2Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M14.1673 17.5H5.83398C3.07256 17.5 0.833984 15.2614 0.833984 12.5C0.833984 10.3205 2.22853 8.46663 4.17402 7.7821C4.16957 7.68862 4.16732 7.59455 4.16732 7.49996C4.16732 4.2783 6.77899 1.66663 10.0007 1.66663C13.2223 1.66663 15.834 4.2783 15.834 7.49996C15.834 7.59455 15.8317 7.68862 15.8273 7.7821C17.7727 8.46663 19.1673 10.3205 19.1673 12.5C19.1673 15.2614 16.9287 17.5 14.1673 17.5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Cloudy2Fill;
