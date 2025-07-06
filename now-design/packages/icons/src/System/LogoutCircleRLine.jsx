import React from 'react';

const LogoutCircleRLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.0003 18.3333C5.39795 18.3333 1.66699 14.6023 1.66699 9.99996C1.66699 5.39758 5.39795 1.66663 10.0003 1.66663C12.7264 1.66663 15.1467 2.97561 16.6672 4.99932L14.4094 4.99938C13.2342 3.96245 11.6907 3.33329 10.0003 3.33329C6.31843 3.33329 3.33366 6.31806 3.33366 9.99996C3.33366 13.6819 6.31843 16.6666 10.0003 16.6666C11.6912 16.6666 13.235 16.0371 14.4102 14.9998H16.6677C15.1474 17.024 12.7267 18.3333 10.0003 18.3333ZM15.8337 13.3333V10.8333H9.16699V9.16662H15.8337V6.66663L20.0003 9.99996L15.8337 13.3333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default LogoutCircleRLine;
