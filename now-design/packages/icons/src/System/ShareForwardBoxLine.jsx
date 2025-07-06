import React from 'react';

const ShareForwardBoxLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M7.49935 2.49975V4.16642H3.33268V15.8331H16.666V8.33308H18.3327V16.6664C18.3327 17.1267 17.9596 17.4998 17.4993 17.4998H2.49935C2.03912 17.4998 1.66602 17.1267 1.66602 16.6664V3.33308C1.66602 2.87285 2.03912 2.49975 2.49935 2.49975H7.49935ZM15.7908 4.16642L13.3327 1.7083L14.5112 0.529785L18.9609 4.97953C19.1562 5.17479 19.1562 5.49138 18.9609 5.68664C18.8672 5.78041 18.74 5.83308 18.6073 5.83308H11.666C10.7455 5.83308 9.99935 6.57928 9.99935 7.49975V12.4998H8.33268V7.49975C8.33268 5.6588 9.8251 4.16642 11.666 4.16642H15.7908Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ShareForwardBoxLine;
