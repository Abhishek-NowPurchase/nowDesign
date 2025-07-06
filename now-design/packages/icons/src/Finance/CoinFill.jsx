import React from 'react';

const CoinFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M19.1703 10.0024V11.669C19.1703 14.4304 15.0662 16.669 10.0036 16.669C5.03138 16.669 0.983797 14.5097 0.840822 11.8164L0.836914 11.669V10.0024C0.836914 12.7638 4.94097 15.0024 10.0036 15.0024C15.0662 15.0024 19.1703 12.7638 19.1703 10.0024ZM10.0036 3.33569C15.0662 3.33569 19.1703 5.57427 19.1703 8.33569C19.1703 11.0971 15.0662 13.3357 10.0036 13.3357C4.94097 13.3357 0.836914 11.0971 0.836914 8.33569C0.836914 5.57427 4.94097 3.33569 10.0036 3.33569Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default CoinFill;
