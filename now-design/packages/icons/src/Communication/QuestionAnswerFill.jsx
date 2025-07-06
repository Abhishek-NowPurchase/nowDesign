import React from 'react';

const QuestionAnswerFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M6.66658 15H15.1976L16.6666 16.1543V7.5H17.4999C17.9602 7.5 18.3333 7.8731 18.3333 8.33333V19.5833L14.6212 16.6667H7.49992C7.03969 16.6667 6.66658 16.2936 6.66658 15.8333V15ZM4.54538 13.3333L0.833252 16.25V3.33333C0.833252 2.8731 1.20635 2.5 1.66659 2.5H14.1666C14.6268 2.5 14.9999 2.8731 14.9999 3.33333V13.3333H4.54538Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default QuestionAnswerFill;
