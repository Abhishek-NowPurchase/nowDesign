import React from 'react';

const MoonFoggyFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M13.3327 16.9454V15H11.666V11.6667H2.77633C2.59574 11.0029 2.49935 10.3044 2.49935 9.58336C2.49935 5.78298 5.17723 2.60803 8.74901 1.84253C8.47976 2.5662 8.33268 3.34927 8.33268 4.1667C8.33268 7.84861 11.3174 10.8334 14.9993 10.8334C16.2103 10.8334 17.3458 10.5105 18.3245 9.9462C18.1808 13.1314 16.1549 15.8264 13.3327 16.9454ZM5.83268 16.6667H11.666V18.3334H5.83268V16.6667ZM1.66602 13.3334H9.99935V15H1.66602V13.3334Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MoonFoggyFill;
