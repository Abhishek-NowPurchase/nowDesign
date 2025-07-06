import React from 'react';

const LinkedinLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.0013 7.95833C10.7656 7.17768 11.7606 6.66663 12.918 6.66663C15.4492 6.66663 17.5013 8.71863 17.5013 11.25V17.5H15.8347V11.25C15.8347 9.63913 14.5288 8.33329 12.918 8.33329C11.3072 8.33329 10.0013 9.63913 10.0013 11.25V17.5H8.33465V7.08329H10.0013V7.95833ZM4.16797 5.41663C3.47761 5.41663 2.91797 4.85698 2.91797 4.16663C2.91797 3.47627 3.47761 2.91663 4.16797 2.91663C4.85832 2.91663 5.41797 3.47627 5.41797 4.16663C5.41797 4.85698 4.85832 5.41663 4.16797 5.41663ZM3.33464 7.08329H5.0013V17.5H3.33464V7.08329Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default LinkedinLine;
