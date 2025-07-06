import React from 'react';

const VoiceprintFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M4.16634 5.83341H5.83301V14.1667H4.16634V5.83341ZM0.833008 8.33341H2.49967V11.6667H0.833008V8.33341ZM7.49968 1.66675H9.16634V16.6667H7.49968V1.66675ZM10.833 3.33341H12.4997V18.3334H10.833V3.33341ZM14.1663 5.83341H15.833V14.1667H14.1663V5.83341ZM17.4997 8.33341H19.1663V11.6667H17.4997V8.33341Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default VoiceprintFill;
