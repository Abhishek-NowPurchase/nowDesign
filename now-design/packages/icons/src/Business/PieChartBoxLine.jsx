import React from 'react';

const PieChartBoxLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M2.49996 2.5H17.5C17.9602 2.5 18.3333 2.8731 18.3333 3.33333V16.6667C18.3333 17.1269 17.9602 17.5 17.5 17.5H2.49996C2.03973 17.5 1.66663 17.1269 1.66663 16.6667V3.33333C1.66663 2.8731 2.03973 2.5 2.49996 2.5ZM3.33329 4.16667V15.8333H16.6666V4.16667H3.33329ZM14.0833 10.8333C13.6972 12.7352 12.0158 14.1667 9.99996 14.1667C7.69877 14.1667 5.83329 12.3012 5.83329 10C5.83329 7.9842 7.26476 6.30274 9.16662 5.91668V10.8333H14.0833ZM14.0833 9.16667H10.8333V5.91668C12.4659 6.24808 13.7519 7.53406 14.0833 9.16667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default PieChartBoxLine;
