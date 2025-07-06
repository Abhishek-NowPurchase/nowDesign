import React from 'react';

const MoonFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9.48326 1.68237C8.26246 2.82306 7.49935 4.44741 7.49935 6.24998C7.49935 9.70174 10.2976 12.5 13.7493 12.5C15.5519 12.5 17.1763 11.7369 18.3169 10.5161C18.0504 14.8781 14.4284 18.3333 9.99935 18.3333C5.39697 18.3333 1.66602 14.6023 1.66602 9.99999C1.66602 5.57094 5.12126 1.9489 9.48326 1.68237Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MoonFill;
