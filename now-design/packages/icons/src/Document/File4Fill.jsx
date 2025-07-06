import React from 'react';

const File4Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M17.5 12.5H11.6667V18.3333H3.33188C2.87245 18.3333 2.5 17.9539 2.5 17.5068V2.49313C2.5 2.03667 2.87079 1.66663 3.32783 1.66663H16.6722C17.1293 1.66663 17.5 2.04073 17.5 2.50619V12.5ZM17.5 14.1666L13.3333 18.3306V14.1666H17.5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default File4Fill;
