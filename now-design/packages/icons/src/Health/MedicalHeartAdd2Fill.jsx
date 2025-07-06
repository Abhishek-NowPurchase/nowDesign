import React from 'react';

const MedicalHeartAdd2Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M13.7503 2.5C16.2817 2.5 18.3337 4.58333 18.3337 7.5C18.3337 8.68758 18.0746 9.77158 17.6444 10.7555C16.8773 10.2767 15.9712 10 15.0003 10C12.2389 10 10.0003 12.2386 10.0003 15C10.0003 15.9171 10.2472 16.7765 10.6782 17.5154C10.422 17.6673 10.1933 17.8009 10.0003 17.9167C7.917 16.6667 1.66699 13.3333 1.66699 7.5C1.66699 4.58333 3.75033 2.5 6.25032 2.5C7.8003 2.5 9.16699 3.33333 10.0003 4.16667C10.8337 3.33333 12.2003 2.5 13.7503 2.5ZM15.8337 14.1667V11.6667H14.167V14.1667H11.667V15.8333H14.1662L14.167 18.3333H15.8337L15.8328 15.8333H18.3337V14.1667H15.8337Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MedicalHeartAdd2Fill;
