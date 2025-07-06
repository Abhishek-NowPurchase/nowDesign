import React from 'react';

const SoundModuleFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M17.4997 15V17.5H15.833V15H14.1663V12.5H19.1663V15H17.4997ZM4.16634 15V17.5H2.49967V15H0.833008V12.5H5.83301V15H4.16634ZM9.16634 5V2.5H10.833V5H12.4997V7.5H7.49968V5H9.16634ZM9.16634 9.16667H10.833V17.5H9.16634V9.16667ZM2.49967 10.8333V2.5H4.16634V10.8333H2.49967ZM15.833 10.8333V2.5H17.4997V10.8333H15.833Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default SoundModuleFill;
