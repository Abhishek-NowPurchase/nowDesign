import React from 'react';

const SoundModuleLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M17.4997 15V17.5H15.833V15H14.1663V13.3333H19.1663V15H17.4997ZM4.16634 15V17.5H2.49967V15H0.833008V13.3333H5.83301V15H4.16634ZM9.16634 5V2.5H10.833V5H12.4997V6.66667H7.49968V5H9.16634ZM9.16634 8.33333H10.833V17.5H9.16634V8.33333ZM2.49967 11.6667V2.5H4.16634V11.6667H2.49967ZM15.833 11.6667V2.5H17.4997V11.6667H15.833Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default SoundModuleLine;
