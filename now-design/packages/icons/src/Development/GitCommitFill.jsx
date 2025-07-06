import React from 'react';

const GitCommitFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M13.2283 10.8333C12.8582 12.271 11.5532 13.3333 10 13.3333C8.44683 13.3333 7.14172 12.271 6.77168 10.8333H2.5V9.16663H6.77168C7.14172 7.72893 8.44683 6.66663 10 6.66663C11.5532 6.66663 12.8582 7.72893 13.2283 9.16663H17.5V10.8333H13.2283Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default GitCommitFill;
