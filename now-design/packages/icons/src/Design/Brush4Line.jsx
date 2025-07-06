import React from 'react';

const Brush4Line = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M7.49984 4.16386V9.39111H5.83317V4.16386H4.1665V11.6639H15.8332V4.16386H7.49984ZM16.6665 13.3305H3.33317V14.9972H16.6665V13.3305ZM2.49984 11.6639V3.33053C2.49984 2.87029 2.87294 2.49719 3.33317 2.49719H16.6665C17.1268 2.49719 17.4998 2.87029 17.4998 3.33053V11.6639H18.3332V15.8305C18.3332 16.2908 17.9601 16.6639 17.4998 16.6639H10.8332V19.1639H9.1665V16.6639H2.49984C2.0396 16.6639 1.6665 16.2908 1.6665 15.8305V11.6639H2.49984Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Brush4Line;
