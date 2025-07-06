import React from 'react';

const ContractLeftLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M12.5593 4.1073L13.7378 5.28582L9.85717 9.16652L17.5003 9.16661V10.8333L9.85717 10.8332L13.7378 14.7139L12.5593 15.8924L6.66681 9.99986L12.5593 4.1073ZM3.33365 15.8331V4.16648H5.00032V15.8331H3.33365Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ContractLeftLine;
