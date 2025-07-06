import React from 'react';

const DoorOpenLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M1.66504 17.5001V15.8334L3.33171 15.8333V4.02887C3.33171 3.62613 3.61972 3.28102 4.01596 3.20898L11.9089 1.7739C12.1806 1.7245 12.4409 1.9047 12.4903 2.17639C12.4957 2.2059 12.4983 2.23584 12.4983 2.26583V3.33325L15.8317 3.33339C16.2919 3.33339 16.665 3.70649 16.665 4.16672V15.8333L18.3317 15.8334V17.5001H14.9983V5.00006L12.4983 4.99992V17.5001H1.66504ZM10.8317 3.66375L4.99837 4.72436V15.8334H10.8317V3.66375ZM9.99833 9.16675V10.8334H8.33171V9.16675H9.99833Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default DoorOpenLine;
