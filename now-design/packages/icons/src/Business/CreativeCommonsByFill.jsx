import React from 'react';

const CreativeCommonsByFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9.99996 1.66663C14.6023 1.66663 18.3333 5.39758 18.3333 9.99996C18.3333 14.6023 14.6023 18.3333 9.99996 18.3333C5.39758 18.3333 1.66663 14.6023 1.66663 9.99996C1.66663 5.39758 5.39758 1.66663 9.99996 1.66663ZM11.6666 8.33329H8.33329C7.87306 8.33329 7.49996 8.70637 7.49996 9.16662V12.5H8.74996V15.8333H11.25V12.5H12.5V9.16662C12.5 8.70637 12.1269 8.33329 11.6666 8.33329ZM9.99996 4.16663C9.07946 4.16663 8.33329 4.91282 8.33329 5.83329C8.33329 6.75377 9.07946 7.49996 9.99996 7.49996C10.9205 7.49996 11.6666 6.75377 11.6666 5.83329C11.6666 4.91282 10.9205 4.16663 9.99996 4.16663Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default CreativeCommonsByFill;
