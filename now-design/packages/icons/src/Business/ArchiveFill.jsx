import React from 'react';

const ArchiveFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M2.49996 8.33333H17.5V16.6703C17.5 17.1286 17.1292 17.5 16.6721 17.5H3.32779C2.87059 17.5 2.49996 17.1293 2.49996 16.6703V8.33333ZM7.49996 10V11.6667H12.5V10H7.49996ZM1.66663 3.33317C1.66663 2.87302 2.04605 2.5 2.49313 2.5H17.5068C17.9633 2.5 18.3333 2.86977 18.3333 3.33317V6.66667H1.66663V3.33317Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArchiveFill;
