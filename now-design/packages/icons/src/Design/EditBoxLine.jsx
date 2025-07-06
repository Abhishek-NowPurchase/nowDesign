import React from 'react';

const EditBoxLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M13.9645 2.49738L12.2978 4.16404H4.16667V15.8307H15.8333V7.69959L17.5 6.03292V16.6641C17.5 17.1243 17.1269 17.4974 16.6667 17.4974H3.33333C2.8731 17.4974 2.5 17.1243 2.5 16.6641V3.33071C2.5 2.87048 2.8731 2.49738 3.33333 2.49738H13.9645ZM17.0711 1.7478L18.2496 2.92631L10.5892 10.5866L9.41283 10.5887L9.41075 9.40814L17.0711 1.7478Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default EditBoxLine;
