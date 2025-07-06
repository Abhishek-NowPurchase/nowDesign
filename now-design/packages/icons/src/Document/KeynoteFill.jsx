import React from 'react';

const KeynoteFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M15.8325 1.66663C16.2932 1.66663 16.7382 2.0247 16.8294 2.48083L18.1704 9.18579C18.2603 9.63546 17.9538 9.99996 17.5068 9.99996H10.833V16.6666H14.1666V18.3333H5.83322V16.6666H9.16634V9.99996H2.49307C2.0366 9.99996 1.73817 9.64187 1.8294 9.18579L3.17038 2.48083C3.26032 2.03116 3.70376 1.66663 4.16729 1.66663H15.8325Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default KeynoteFill;
