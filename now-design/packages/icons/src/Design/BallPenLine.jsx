import React from 'react';

const BallPenLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M14.8743 9.74853L14.2851 9.15928L6.03553 17.4089H2.5V13.8733L11.9281 4.44522L16.6422 9.15928C16.9676 9.4847 16.9676 10.0124 16.6422 10.3378L10.7496 16.2304L9.57108 15.0518L14.8743 9.74853ZM13.1066 7.98075L11.9281 6.80223L4.16667 14.5637V15.7422H5.34518L13.1066 7.98075ZM15.4636 2.08819L17.8207 4.44522C18.1461 4.77065 18.1461 5.29829 17.8207 5.62372L16.6422 6.80223L13.1066 3.2667L14.2851 2.08819C14.6106 1.76276 15.1382 1.76276 15.4636 2.08819Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default BallPenLine;
