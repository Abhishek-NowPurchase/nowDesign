import React from 'react';

const RadioButtonFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9.99935 18.3333C5.39697 18.3333 1.66602 14.6023 1.66602 9.99996C1.66602 5.39758 5.39697 1.66663 9.99935 1.66663C14.6017 1.66663 18.3327 5.39758 18.3327 9.99996C18.3327 14.6023 14.6017 18.3333 9.99935 18.3333ZM9.99935 13.3333C11.8403 13.3333 13.3327 11.8409 13.3327 9.99996C13.3327 8.15901 11.8403 6.66663 9.99935 6.66663C8.1584 6.66663 6.66601 8.15901 6.66601 9.99996C6.66601 11.8409 8.1584 13.3333 9.99935 13.3333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default RadioButtonFill;
