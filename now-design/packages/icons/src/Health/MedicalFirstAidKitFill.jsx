import React from 'react';

const MedicalFirstAidKitFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M13.3337 0.833374C13.7939 0.833374 14.167 1.20647 14.167 1.66671V4.16671H17.5003C17.9606 4.16671 18.3337 4.53981 18.3337 5.00004V16.6667C18.3337 17.127 17.9606 17.5 17.5003 17.5H2.50033C2.04009 17.5 1.66699 17.127 1.66699 16.6667V5.00004C1.66699 4.53981 2.04009 4.16671 2.50033 4.16671H5.83366V1.66671C5.83366 1.20647 6.20676 0.833374 6.66699 0.833374H13.3337ZM10.8337 7.50004H9.16699V10H6.66699V11.6667H9.16616L9.16699 14.1667H10.8337L10.8328 11.6667H13.3337V10H10.8337V7.50004ZM12.5003 2.50004H7.50032V4.16671H12.5003V2.50004Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MedicalFirstAidKitFill;
