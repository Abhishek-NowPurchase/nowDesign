import React from 'react';

const PokerDiamondsLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M3.36307 8.94469C2.86075 9.5586 2.86075 10.4415 3.36307 11.0554L9.35459 18.3784C9.68801 18.7859 10.3111 18.7859 10.6445 18.3784L16.6361 11.0554C17.1383 10.4415 17.1383 9.5586 16.6361 8.94469L10.6445 1.62168C10.3111 1.21416 9.68801 1.21416 9.35459 1.62168L3.36307 8.94469ZM9.99959 3.46536L15.3461 10L9.99959 16.5348L4.65299 10L9.99959 3.46536Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default PokerDiamondsLine;
