import React from 'react';

const FileDamageLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M15.8333 7.49996H11.6667V3.33329H4.16667V9.88087L5.41667 11.0416L8.33333 7.91663L10.8333 12.0833L12.5 9.99996L15 12.5L12.5 12.0833L10.8333 14.1666L8.33333 10.8333L5.83333 13.75L4.16667 12.7083V16.6666H15.8333V7.49996ZM17.5 6.66663V17.4943C17.5 17.9584 17.1293 18.3333 16.6722 18.3333H3.32783C2.87079 18.3333 2.5 17.9633 2.5 17.5068V2.49313C2.5 2.04605 2.87392 1.66663 3.33518 1.66663H12.4973L17.5 6.66663Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FileDamageLine;
