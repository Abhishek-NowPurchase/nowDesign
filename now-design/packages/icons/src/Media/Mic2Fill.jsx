import React from 'react';

const Mic2Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.0002 0.833374C12.3014 0.833374 14.1669 2.69886 14.1669 5.00004V10C14.1669 12.3012 12.3014 14.1667 10.0002 14.1667C7.69904 14.1667 5.83357 12.3012 5.83357 10V5.00004C5.83357 2.69886 7.69904 0.833374 10.0002 0.833374ZM1.82715 11.6346L3.46177 11.3077C4.06951 14.3635 6.7659 16.6667 10.0002 16.6667C13.2346 16.6667 15.9309 14.3635 16.5387 11.3077L18.1733 11.6346C17.4136 15.4544 14.0432 18.3334 10.0002 18.3334C5.95732 18.3334 2.58683 15.4544 1.82715 11.6346Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Mic2Fill;
