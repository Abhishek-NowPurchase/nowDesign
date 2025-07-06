import React from 'react';

const FileShield2Line = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M11.6667 7.49996V3.33329H4.16667V16.6666H9.21358C9.4865 17.0142 9.81692 17.3205 10.1967 17.5706L11.355 18.3333H3.32783C2.87079 18.3333 2.5 17.9633 2.5 17.5068V2.49313C2.5 2.04605 2.87392 1.66663 3.33518 1.66663H12.4973L17.5 6.66663V7.49996H11.6667ZM10 9.16662H17.5V14.1241C17.5 14.9497 17.0823 15.7206 16.3868 16.1786L13.75 17.9148L11.1132 16.1786C10.4177 15.7206 10 14.9497 10 14.1241V9.16662ZM11.6667 14.1241C11.6667 14.3876 11.8013 14.6361 12.0298 14.7866L13.75 15.9193L15.4702 14.7866C15.6987 14.6361 15.8333 14.3876 15.8333 14.1241V10.8333H11.6667V14.1241Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FileShield2Line;
