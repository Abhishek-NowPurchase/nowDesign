import React from 'react';

const OpenSourceFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.0013 1.66663C14.6037 1.66663 18.3347 5.39758 18.3347 9.99996C18.3347 13.4418 16.248 16.3964 13.2707 17.6675L11.172 12.2095C11.9628 11.7896 12.5013 10.9577 12.5013 9.99996C12.5013 8.61921 11.382 7.49996 10.0013 7.49996C8.62057 7.49996 7.5013 8.61921 7.5013 9.99996C7.5013 10.958 8.0402 11.7902 8.8314 12.2099L6.73268 17.6678C3.75499 16.3969 1.66797 13.4421 1.66797 9.99996C1.66797 5.39758 5.39893 1.66663 10.0013 1.66663Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default OpenSourceFill;
