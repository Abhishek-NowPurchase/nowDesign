import React from 'react';

const CharacterRecognitionLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M4.16471 12.5V15.8333H7.49805V17.5H2.49805V12.5H4.16471ZM17.498 12.5V17.5H12.498V15.8333H15.8313V12.5H17.498ZM10.8305 5L14.4972 14.1667H12.7013L11.7005 11.6667H8.29221L7.29305 14.1667H5.49805L9.16384 5H10.8305ZM9.99717 7.40431L8.958 10H11.0347L9.99717 7.40431ZM7.49805 2.5V4.16667H4.16471V7.5H2.49805V2.5H7.49805ZM17.498 2.5V7.5H15.8313V4.16667H12.498V2.5H17.498Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default CharacterRecognitionLine;
