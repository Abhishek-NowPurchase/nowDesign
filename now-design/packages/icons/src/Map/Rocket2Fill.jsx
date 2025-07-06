import React from 'react';

const Rocket2Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M7.08147 16.6707H12.9178C12.369 17.9868 11.3158 19.04 9.99967 19.5888C8.68351 19.04 7.63033 17.9868 7.08147 16.6707ZM14.9997 12.3412L16.6663 14.2315V15.8373H3.33301V14.2315L4.99967 12.3412V7.504C4.99967 4.60129 7.08669 2.13187 9.99967 1.21667C12.9127 2.13187 14.9997 4.60129 14.9997 7.504V12.3412ZM9.99967 9.17066C10.9202 9.17066 11.6663 8.42449 11.6663 7.504C11.6663 6.58352 10.9202 5.83733 9.99967 5.83733C9.07917 5.83733 8.33301 6.58352 8.33301 7.504C8.33301 8.42449 9.07917 9.17066 9.99967 9.17066Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Rocket2Fill;
