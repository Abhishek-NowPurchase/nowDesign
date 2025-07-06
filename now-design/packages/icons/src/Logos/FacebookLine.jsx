import React from 'react';

const FacebookLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.833 7.49996H14.583L14.1663 9.16663H10.833V16.6666H9.16634V9.16663H5.83301V7.49996H9.16634V5.93977C9.16634 4.4539 9.32109 3.91509 9.61159 3.37188C9.90209 2.82868 10.3284 2.40236 10.8716 2.11185C11.4148 1.82133 11.9536 1.66663 13.4395 1.66663C13.8745 1.66663 14.2557 1.70829 14.583 1.79163V3.33329H13.4395C12.3364 3.33329 12.0005 3.39816 11.6576 3.58153C11.4048 3.71672 11.2164 3.90512 11.0813 4.15788C10.8978 4.50076 10.833 4.83668 10.833 5.93977V7.49996Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FacebookLine;
