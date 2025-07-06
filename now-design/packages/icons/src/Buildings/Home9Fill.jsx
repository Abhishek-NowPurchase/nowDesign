import React from 'react';

const Home9Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.4844 2.2386C10.1946 2.03163 9.80535 2.03163 9.5156 2.2386L1.59894 7.89336L2.56767 9.24954L9.99994 3.94079L17.4323 9.24954L18.401 7.89336L10.4844 2.2386ZM16.3177 10.572L10.4844 6.40527C10.1946 6.1983 9.80535 6.1983 9.5156 6.40527L3.68227 10.572C3.46328 10.7284 3.3333 10.9809 3.3333 11.25V16.6667C3.3333 17.127 3.7064 17.5 4.16664 17.5H15.8333C16.2935 17.5 16.6666 17.127 16.6666 16.6667V11.25C16.6666 10.9809 16.5367 10.7284 16.3177 10.572Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Home9Fill;
