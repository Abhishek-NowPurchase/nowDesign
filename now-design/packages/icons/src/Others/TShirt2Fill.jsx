import React from 'react';

const TShirt2Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M17.4983 2.5C17.9586 2.5 18.3317 2.8731 18.3317 3.33333V9.16667C18.3317 9.62692 17.9586 10 17.4983 10H15.8308L15.8317 16.6667C15.8317 17.1269 15.4586 17.5 14.9983 17.5H4.99837C4.53813 17.5 4.16504 17.1269 4.16504 16.6667L4.16421 9.99917L2.49837 10C2.03813 10 1.66504 9.62692 1.66504 9.16667V3.33333C1.66504 2.8731 2.03813 2.5 2.49837 2.5H7.49837C7.49837 3.88071 8.61766 5 9.99833 5C11.3791 5 12.4983 3.88071 12.4983 2.5H17.4983Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default TShirt2Fill;
