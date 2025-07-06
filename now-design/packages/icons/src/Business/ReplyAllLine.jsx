import React from 'react';

const ReplyAllLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M11.6667 3.75V7.5C16.269 7.5 20 11.231 20 15.8333C20 16.0606 19.9909 16.2857 19.9731 16.5083C18.7546 14.197 16.3651 12.5992 13.5942 12.5044L13.3333 12.5H11.6666L11.6667 16.25L5 10L11.6667 3.75ZM6.66667 3.75V6.03083L2.43333 10L6.66583 13.9675L6.66667 16.25L0 10L6.66667 3.75ZM10 7.59705L7.43686 10L9.99992 12.4028V10.8333L13.3617 10.8336L13.6512 10.8388C14.7214 10.8753 15.7544 11.0971 16.714 11.4778C15.4915 10.0624 13.6837 9.16667 11.6667 9.16667H10V7.59705Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ReplyAllLine;
