import React from 'react';

const Progress4Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9.99935 18.3333C14.6017 18.3333 18.3327 14.6023 18.3327 9.99996C18.3327 5.39758 14.6017 1.66663 9.99935 1.66663C5.39697 1.66663 1.66602 5.39758 1.66602 9.99996C1.66602 14.6023 5.39697 18.3333 9.99935 18.3333ZM14.9993 9.99996C14.9993 12.7614 12.7608 15 9.99935 15V4.99996C12.7608 4.99996 14.9993 7.23853 14.9993 9.99996Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Progress4Fill;
