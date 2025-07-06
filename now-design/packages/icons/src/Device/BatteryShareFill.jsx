import React from 'react';

const BatteryShareFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M11.6665 1.66663C12.1268 1.66663 12.4998 2.03973 12.4998 2.49996V3.33329H14.9998C15.4601 3.33329 15.8332 3.70639 15.8332 4.16663V9.33329L12.4998 6.66663V9.16662H11.6665C9.88134 9.16662 8.33317 10.6583 8.33317 12.5V15H9.99984V12.5C9.99984 11.625 10.7915 10.8333 11.6665 10.8333H12.4998V13.3333L15.8332 10.6666V17.5C15.8332 17.9602 15.4601 18.3333 14.9998 18.3333H4.99984C4.5396 18.3333 4.1665 17.9602 4.1665 17.5V4.16663C4.1665 3.70639 4.5396 3.33329 4.99984 3.33329H7.49984V2.49996C7.49984 2.03973 7.87294 1.66663 8.33317 1.66663H11.6665Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default BatteryShareFill;
