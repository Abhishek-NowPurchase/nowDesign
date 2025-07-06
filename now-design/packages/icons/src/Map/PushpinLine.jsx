import React from 'react';

const PushpinLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M11.5224 1.40833L18.5935 8.47941L17.415 9.65791L16.8258 9.06866L13.2902 12.6042L12.7009 15.5505L11.5224 16.729L7.98689 13.1934L3.86211 17.3182L2.68359 16.1397L6.80839 12.0149L3.27285 8.47941L4.45136 7.30088L7.39764 6.71163L10.9332 3.17609L10.3439 2.58684L11.5224 1.40833ZM12.1117 4.35461L8.21933 8.24697L5.86776 8.71724L11.2845 14.1341L11.7548 11.7825L15.6473 7.89014L12.1117 4.35461Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default PushpinLine;
