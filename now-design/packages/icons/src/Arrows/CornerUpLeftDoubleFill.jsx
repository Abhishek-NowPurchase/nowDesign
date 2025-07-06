import React from 'react';

const CornerUpLeftDoubleFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M16.6669 15.8334L16.6668 8.33347H12.0118V3.82153L6.66663 9.16672L12.0118 14.5119V10.0001H15.0002L15.0003 15.8334H16.6669ZM8.46976 5.04183L7.29128 3.86331L1.98798 9.16663L7.29128 14.4699L8.46976 13.2914L4.345 9.16663L8.46976 5.04183Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default CornerUpLeftDoubleFill;
