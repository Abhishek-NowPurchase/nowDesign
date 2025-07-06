import React from 'react';

const FileList3Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M15.8332 18.3333H4.1665C2.7858 18.3333 1.6665 17.214 1.6665 15.8333V2.49996C1.6665 2.03973 2.0396 1.66663 2.49984 1.66663H14.1665C14.6268 1.66663 14.9998 2.03973 14.9998 2.49996V12.5H18.3332V15.8333C18.3332 17.214 17.2139 18.3333 15.8332 18.3333ZM14.9998 14.1666V15.8333C14.9998 16.2935 15.3729 16.6666 15.8332 16.6666C16.2934 16.6666 16.6665 16.2935 16.6665 15.8333V14.1666H14.9998ZM4.99984 5.83329V7.49996H11.6665V5.83329H4.99984ZM4.99984 9.16662V10.8333H11.6665V9.16662H4.99984ZM4.99984 12.5V14.1666H9.1665V12.5H4.99984Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FileList3Fill;
