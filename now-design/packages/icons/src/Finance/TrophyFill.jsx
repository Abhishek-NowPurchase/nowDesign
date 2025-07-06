import React from 'react';

const TrophyFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.8369 14.1174V15.8356H15.0036V17.5023H5.00358V15.8356H9.17026V14.1174C5.88166 13.7074 3.33691 10.902 3.33691 7.50232V2.50232H16.6703V7.50232C16.6703 10.902 14.1255 13.7074 10.8369 14.1174ZM0.836914 4.16899H2.50358V7.50232H0.836914V4.16899ZM17.5036 4.16899H19.1703V7.50232H17.5036V4.16899Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default TrophyFill;
