import React from 'react';

const PokerDiamondsFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M3.36307 8.94469L9.35459 1.62168C9.68801 1.21416 10.3111 1.21416 10.6445 1.62168L16.6361 8.94469C17.1383 9.5586 17.1383 10.4415 16.6361 11.0554L10.6445 18.3784C10.3111 18.7859 9.68801 18.7859 9.35459 18.3784L3.36307 11.0554C2.86075 10.4415 2.86075 9.5586 3.36307 8.94469Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default PokerDiamondsFill;
