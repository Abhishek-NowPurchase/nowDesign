import React from 'react';

const PatreonLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M12.5013 14.1666C9.04949 14.1666 6.2513 11.3684 6.2513 7.91663C6.2513 4.46484 9.04949 1.66663 12.5013 1.66663C15.9531 1.66663 18.7513 4.46484 18.7513 7.91663C18.7513 11.3684 15.9531 14.1666 12.5013 14.1666ZM12.5013 12.5C15.0326 12.5 17.0847 10.448 17.0847 7.91663C17.0847 5.38532 15.0326 3.33329 12.5013 3.33329C9.96999 3.33329 7.91797 5.38532 7.91797 7.91663C7.91797 10.448 9.96999 12.5 12.5013 12.5ZM1.66797 1.66663H5.83463V18.3333H1.66797V1.66663ZM3.33464 3.33329V16.6666H4.16797V3.33329H3.33464Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default PatreonLine;
