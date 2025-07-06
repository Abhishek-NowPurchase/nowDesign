import React from 'react';

const CornerUpRightDoubleFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M3.33308 15.8334L3.33319 8.33347H7.98824V3.82153L13.3334 9.16672L7.98824 14.5119V10.0001H4.99984L4.99974 15.8334H3.33308ZM11.5303 5.04183L12.7088 3.86331L18.0121 9.16663L12.7088 14.4699L11.5303 13.2914L15.6551 9.16663L11.5303 5.04183Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default CornerUpRightDoubleFill;
