import React from 'react';

const LoginBoxFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M8.33301 9.16662H3.33301V2.49996C3.33301 2.03973 3.70611 1.66663 4.16634 1.66663H15.833C16.2933 1.66663 16.6663 2.03973 16.6663 2.49996V17.5C16.6663 17.9602 16.2933 18.3333 15.833 18.3333H4.16634C3.70611 18.3333 3.33301 17.9602 3.33301 17.5V10.8333H8.33301V13.3333L12.4997 9.99996L8.33301 6.66663V9.16662Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default LoginBoxFill;
