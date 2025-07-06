import React from 'react';

const MedicalSyringeFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M18.0646 6.64934L16.8861 7.82785L15.1183 6.06009L13.3505 7.82785L16.2968 10.7741L15.1183 11.9526L14.5291 11.3634L9.22575 16.6667H4.5117L2.74394 18.4344L1.56543 17.2559L3.3332 15.4882V10.7741L8.6365 5.47084L8.04724 4.88158L9.22575 3.70307L12.172 6.64934L13.9398 4.88158L12.172 3.11381L13.3505 1.9353L18.0646 6.64934ZM8.04724 11.9526L5.69021 9.59561L4.5117 10.7741L6.86873 13.1312L8.04724 11.9526ZM10.4043 9.59561L8.04724 7.2386L6.86873 8.41711L9.22575 10.7741L10.4043 9.59561Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MedicalSyringeFill;
