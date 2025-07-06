import React from 'react';

const AngularjsLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M14.6028 13.8755L15.0103 13.6495L15.9428 5.5578L10 3.43631L4.05727 5.5578L4.98968 13.6495L5.38455 13.8685L10 3.50829L14.6028 13.8755ZM13.687 14.3833H13.0218L12.0478 11.95H7.93555L6.9616 14.3833H6.31302L10 16.4275L13.687 14.3833ZM10 1.66663L17.75 4.43329L16.5679 14.6916L10 18.3333L3.43206 14.6916L2.25 4.43329L10 1.66663ZM11.4152 10.45L10 7.04163L8.58483 10.45H11.4152Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default AngularjsLine;
