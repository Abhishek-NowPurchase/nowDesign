import React from 'react';

const SignalWifiOffLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M2.33988 1.16113L17.0713 15.8925L15.8928 17.071L12.8238 14.0028L10.0002 17.4999L0.574707 5.83056C1.33648 5.2145 2.15979 4.67152 3.03398 4.21227L1.16137 2.33965L2.33988 1.16113ZM2.98306 6.1598L10.0002 14.8474L11.6388 12.8169L4.27611 5.4536C3.83293 5.66457 3.40131 5.90027 2.98306 6.1598ZM10.0002 2.49997C13.5705 2.49997 16.8494 3.74733 19.4251 5.83003L14.9197 11.4074L13.7347 10.2224L17.0168 6.1594C14.9353 4.86803 12.5229 4.16663 10.0002 4.16663C9.27284 4.16663 8.55467 4.22494 7.85093 4.33889L6.43729 2.92567C7.57932 2.64746 8.77251 2.49997 10.0002 2.49997Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default SignalWifiOffLine;
