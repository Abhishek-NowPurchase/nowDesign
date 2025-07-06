import React from 'react';

const SettingsFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9.99968 0.833252L17.9163 5.41659V14.5833L9.99968 19.1666L2.08301 14.5833V5.41659L9.99968 0.833252ZM9.99968 12.4999C11.3804 12.4999 12.4997 11.3807 12.4997 9.99992C12.4997 8.61917 11.3804 7.49992 9.99968 7.49992C8.61893 7.49992 7.49968 8.61917 7.49968 9.99992C7.49968 11.3807 8.61893 12.4999 9.99968 12.4999Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default SettingsFill;
