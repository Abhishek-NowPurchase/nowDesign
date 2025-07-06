import React from 'react';

const Map2Line = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M1.66699 4.16663L7.50032 1.66663L12.5003 4.16663L17.7528 1.91554C17.9644 1.82489 18.2093 1.92287 18.3 2.13438C18.3222 2.18625 18.3337 2.24209 18.3337 2.29852V15.8333L12.5003 18.3333L7.50032 15.8333L2.24779 18.0844C2.03628 18.175 1.79133 18.077 1.70068 17.8655C1.67845 17.8137 1.66699 17.7578 1.66699 17.7014V4.16663ZM13.3337 16.1629L16.667 14.7343V4.19419L13.3337 5.62276V16.1629ZM11.667 16.0532V5.61335L8.33366 3.94668V14.3865L11.667 16.0532ZM6.66699 14.3771V3.83705L3.33366 5.26562V15.8057L6.66699 14.3771Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Map2Line;
