import React from 'react';

const VideoOffFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M14.1663 15.3451L17.6601 18.8388L18.8386 17.6603L2.33942 1.16113L1.16091 2.33965L2.1545 3.33323H1.66634C1.20611 3.33323 0.833008 3.70633 0.833008 4.16657V15.8332C0.833008 16.2935 1.20611 16.6666 1.66634 16.6666H13.333C13.7933 16.6666 14.1663 16.2935 14.1663 15.8332V15.3451ZM13.333 3.33323H6.84469L18.9233 15.4118C19.0668 15.346 19.1663 15.2011 19.1663 15.033V4.96684C19.1663 4.88136 19.14 4.79793 19.091 4.7279C18.9591 4.53938 18.6993 4.49353 18.5108 4.6255L14.1663 7.66657V4.16657C14.1663 3.70633 13.7933 3.33323 13.333 3.33323Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default VideoOffFill;
