import React from 'react';

const LandscapeLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9.39224 10.1802L12.5003 5L19.167 17.5H1.66699L7.50033 6.66667L9.39224 10.1802ZM10.3251 11.8648L12.4897 15.8333H16.3892L12.415 8.38167L10.3251 11.8648ZM4.45735 15.8333H10.5433L7.50033 10.1821L4.45735 15.8333ZM4.58366 6.66667C3.43307 6.66667 2.50033 5.73392 2.50033 4.58333C2.50033 3.43274 3.43307 2.5 4.58366 2.5C5.73425 2.5 6.66699 3.43274 6.66699 4.58333C6.66699 5.73392 5.73425 6.66667 4.58366 6.66667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default LandscapeLine;
