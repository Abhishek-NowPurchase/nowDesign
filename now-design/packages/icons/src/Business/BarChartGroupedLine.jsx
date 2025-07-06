import React from 'react';

const BarChartGroupedLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M1.66663 9.99996H3.33329V17.5H1.66663V9.99996ZM4.16663 11.6666H5.83329V17.5H4.16663V11.6666ZM13.3333 6.66663H15V17.5H13.3333V6.66663ZM15.8333 8.33329H17.5V17.5H15.8333V8.33329ZM7.49996 1.66663H9.16663V17.5H7.49996V1.66663ZM9.99996 3.33329H11.6666V17.5H9.99996V3.33329Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default BarChartGroupedLine;
