import React from 'react';

const CloseCircleFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.0003 18.3333C5.39795 18.3333 1.66699 14.6023 1.66699 9.99996C1.66699 5.39758 5.39795 1.66663 10.0003 1.66663C14.6027 1.66663 18.3337 5.39758 18.3337 9.99996C18.3337 14.6023 14.6027 18.3333 10.0003 18.3333ZM10.0003 8.82146L7.6433 6.46443L6.46479 7.64293L8.82182 9.99996L6.46479 12.357L7.6433 13.5355L10.0003 11.1785L12.3573 13.5355L13.5358 12.357L11.1788 9.99996L13.5358 7.64293L12.3573 6.46443L10.0003 8.82146Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default CloseCircleFill;
