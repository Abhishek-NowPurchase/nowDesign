import React from 'react';

const FacesUser6Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.0001 14.1666C13.0521 14.1666 15.7209 15.4792 17.1727 17.4372L15.6377 18.1633C14.4562 16.763 12.3729 15.8333 10.0001 15.8333C7.62723 15.8333 5.54393 16.763 4.36249 18.1633L2.82812 17.4365C4.27997 15.4789 6.94847 14.1666 10.0001 14.1666ZM10.0001 1.66663C12.3012 1.66663 14.1668 3.53211 14.1668 5.83329V8.33329C14.1668 10.6345 12.3012 12.5 10.0001 12.5C7.69889 12.5 5.83342 10.6345 5.83342 8.33329V5.83329C5.83342 3.53211 7.69889 1.66663 10.0001 1.66663Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FacesUser6Fill;
