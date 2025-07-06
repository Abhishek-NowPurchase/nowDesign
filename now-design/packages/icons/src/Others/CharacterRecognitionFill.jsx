import React from 'react';

const CharacterRecognitionFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M17.498 2.5V17.5H2.49805V2.5H17.498ZM10.8305 5H9.16384L5.49805 14.1667H7.29305L8.29221 11.6667H11.7005L12.7013 14.1667H14.4972L10.8305 5ZM9.99717 7.40431L11.0347 10H8.958L9.99717 7.40431Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default CharacterRecognitionFill;
