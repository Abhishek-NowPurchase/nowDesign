import React from 'react';

const BluetoothLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M11.9262 9.99996L15.5455 13.6192L10.8314 18.3333H9.16475V12.7614L5.52812 16.398L4.34961 15.2195L9.16475 10.4044V9.59554L4.34961 4.78041L5.52812 3.6019L9.16475 7.23853V1.66663H10.8314L15.5455 6.38067L11.9262 9.99996ZM10.8314 11.2622V15.9763L13.1884 13.6192L10.8314 11.2622ZM10.8314 8.73771L13.1884 6.38067L10.8314 4.02365V8.73771Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default BluetoothLine;
