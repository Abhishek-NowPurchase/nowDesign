import React from 'react';

const DualSim1Line = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M12.5002 1.66663L16.4227 5.58922C16.579 5.74549 16.6668 5.95746 16.6668 6.17847V17.5C16.6668 17.9602 16.2937 18.3333 15.8335 18.3333H4.16683C3.7066 18.3333 3.3335 17.9602 3.3335 17.5V2.49996C3.3335 2.03973 3.7066 1.66663 4.16683 1.66663H12.5002ZM11.8093 3.33329H5.00016V16.6666H15.0002V6.52413L11.8093 3.33329ZM10.8335 13.3333H9.16683V8.33329H8.3335V6.66663H10.8335V13.3333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default DualSim1Line;
