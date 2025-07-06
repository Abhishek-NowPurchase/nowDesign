import React from 'react';

const FileShredFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M18.3332 9.99996V11.6666H1.6665V9.99996H3.33317V2.49613C3.33317 2.038 3.70387 1.66663 4.16282 1.66663H12.4998L16.6663 5.83329L16.6665 9.99996H18.3332ZM2.49984 13.3333H4.1665V18.3333H2.49984V13.3333ZM15.8332 13.3333H17.4998V18.3333H15.8332V13.3333ZM12.4998 13.3333H14.1665V18.3333H12.4998V13.3333ZM9.1665 13.3333H10.8332V18.3333H9.1665V13.3333ZM5.83317 13.3333H7.49984V18.3333H5.83317V13.3333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FileShredFill;
