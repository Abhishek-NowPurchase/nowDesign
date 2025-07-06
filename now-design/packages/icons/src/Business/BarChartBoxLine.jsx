import React from 'react';

const BarChartBoxLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M2.49996 2.5H17.5C17.9602 2.5 18.3333 2.8731 18.3333 3.33333V16.6667C18.3333 17.1269 17.9602 17.5 17.5 17.5H2.49996C2.03973 17.5 1.66663 17.1269 1.66663 16.6667V3.33333C1.66663 2.8731 2.03973 2.5 2.49996 2.5ZM3.33329 4.16667V15.8333H16.6666V4.16667H3.33329ZM5.83329 10.8333H7.49996V14.1667H5.83329V10.8333ZM9.16662 5.83333H10.8333V14.1667H9.16662V5.83333ZM12.5 8.33333H14.1666V14.1667H12.5V8.33333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default BarChartBoxLine;
