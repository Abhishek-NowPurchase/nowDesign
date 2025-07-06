import React from 'react';

const FundsFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M3.25137 14.8864L6.51057 11.6272L8.86758 13.9842L12.6768 10.175L14.1709 11.6691V7.5024H10.0042L11.4983 8.99648L8.86758 11.6272L6.51057 9.27014L2.38902 13.3917C1.92747 12.3562 1.6709 11.2093 1.6709 10.0024C1.6709 5.40003 5.40187 1.66907 10.0042 1.66907C14.6066 1.66907 18.3376 5.40003 18.3376 10.0024C18.3376 14.6048 14.6066 18.3357 10.0042 18.3357C7.22613 18.3357 4.76553 16.9763 3.25137 14.8864Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FundsFill;
