import React from 'react';

const Compass3Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.0003 18.3333C5.39795 18.3333 1.66699 14.6023 1.66699 9.99996C1.66699 5.39758 5.39795 1.66663 10.0003 1.66663C14.6027 1.66663 18.3337 5.39758 18.3337 9.99996C18.3337 14.6023 14.6027 18.3333 10.0003 18.3333ZM13.7503 6.24996L8.33366 8.33329L6.25032 13.75L11.667 11.6666L13.7503 6.24996ZM10.0003 10.8333C9.54007 10.8333 9.16699 10.4602 9.16699 9.99996C9.16699 9.53971 9.54007 9.16662 10.0003 9.16662C10.4606 9.16662 10.8337 9.53971 10.8337 9.99996C10.8337 10.4602 10.4606 10.8333 10.0003 10.8333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Compass3Fill;
