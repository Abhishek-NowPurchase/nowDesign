import React from 'react';

const MedicalHeart2Line = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M16.8692 3.96447C18.7547 5.85393 18.8195 8.86417 17.0658 10.8275L10.0002 17.9042L2.93481 10.8275C1.1812 8.86417 1.24675 5.84918 3.13146 3.96447C5.0183 2.07763 8.03798 2.01406 10.0012 3.77378C11.9587 2.01667 14.9837 2.075 16.8692 3.96447ZM4.30997 5.14298C3.06852 6.38443 3.00619 8.37275 4.15027 9.686L10.0002 15.5453L15.8504 9.686C16.9949 8.37225 16.9328 6.38771 15.6895 5.14175C14.4501 3.89983 12.4552 3.84005 11.1456 4.98647L7.6433 8.48908L6.46479 7.31053L8.81866 4.955L8.75049 4.89751C7.4382 3.84331 5.51967 3.93328 4.30997 5.14298Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MedicalHeart2Line;
