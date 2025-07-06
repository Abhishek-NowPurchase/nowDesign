import React from 'react';

const FileLockFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M13.3333 1.66663L17.5 5.83329V17.5068C17.5 17.9633 17.1292 18.3333 16.6722 18.3333H3.32783C2.87063 18.3333 2.5 17.9539 2.5 17.5068V2.49313C2.5 2.03667 2.87079 1.66663 3.32783 1.66663H13.3333ZM12.5 9.16662V8.33329C12.5 6.95258 11.3807 5.83329 10 5.83329C8.61925 5.83329 7.5 6.95258 7.5 8.33329V9.16662H6.66667V13.3333H13.3333V9.16662H12.5ZM10.8333 9.16662H9.16667V8.33329C9.16667 7.87306 9.53975 7.49996 10 7.49996C10.4602 7.49996 10.8333 7.87306 10.8333 8.33329V9.16662Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FileLockFill;
