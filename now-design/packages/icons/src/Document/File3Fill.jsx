import React from 'react';

const File3Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M17.5 7.49996V17.4937C17.5 17.9592 17.1293 18.3333 16.6722 18.3333H3.32783C2.87079 18.3333 2.5 17.9633 2.5 17.5068V2.49313C2.5 2.04605 2.87245 1.66663 3.33188 1.66663H11.6667V6.66663C11.6667 7.12686 12.0398 7.49996 12.5 7.49996H17.5ZM17.5 5.83329H13.3333V1.66928L17.5 5.83329Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default File3Fill;
