import React from 'react';

const VipDiamondFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M4.06433 2.50232H15.9429C16.2095 2.50232 16.46 2.62989 16.6168 2.8455L19.8025 7.22584C19.9194 7.38657 19.9065 7.60749 19.7718 7.75352L10.3098 18.0039C10.1537 18.173 9.89009 18.1836 9.72101 18.0275C9.71284 18.0199 9.70501 18.0121 9.69742 18.0039L0.235501 7.75352C0.100696 7.60749 0.0877997 7.38657 0.204696 7.22584L3.39039 2.8455C3.54721 2.62989 3.79772 2.50232 4.06433 2.50232Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default VipDiamondFill;
