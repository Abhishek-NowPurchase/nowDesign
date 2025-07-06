import React from 'react';

const FileShield2Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M17.5 8.33329H9.16667V14.4852C9.16667 15.7874 9.81458 17.0044 10.895 17.7285L11.7974 18.3333H3.32783C2.87079 18.3333 2.5 17.9633 2.5 17.5068V2.49313C2.5 2.04605 2.87245 1.66663 3.33188 1.66663H13.3307L17.5 5.83329V8.33329ZM10.8333 9.99996H17.5V14.4852C17.5 15.2321 17.1287 15.9296 16.5104 16.344L14.1667 17.9148L11.8229 16.344C11.2047 15.9296 10.8333 15.2321 10.8333 14.4852V9.99996Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FileShield2Fill;
