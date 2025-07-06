import React from 'react';

const CheckboxCircleLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M3.33268 9.99996C3.33268 6.31806 6.31745 3.33329 9.99935 3.33329C13.6813 3.33329 16.666 6.31806 16.666 9.99996C16.666 13.6819 13.6813 16.6666 9.99935 16.6666C6.31745 16.6666 3.33268 13.6819 3.33268 9.99996ZM9.99935 1.66663C5.39697 1.66663 1.66602 5.39758 1.66602 9.99996C1.66602 14.6023 5.39697 18.3333 9.99935 18.3333C14.6017 18.3333 18.3327 14.6023 18.3327 9.99996C18.3327 5.39758 14.6017 1.66663 9.99935 1.66663ZM14.5469 7.88088L13.3684 6.70237L9.16601 10.9048L6.83861 8.57737L5.66009 9.75587L9.16601 13.2618L14.5469 7.88088Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default CheckboxCircleLine;
