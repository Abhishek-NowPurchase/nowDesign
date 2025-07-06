import React from 'react';

const GalleryUploadLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M6.66699 0.833374V4.16671H3.33366V15.8334H16.667V2.50004H17.5072C17.9637 2.50004 18.3337 2.87083 18.3337 3.32787V16.6722C18.3337 17.1294 17.9542 17.5 17.5072 17.5H2.49349C2.03703 17.5 1.66699 17.1293 1.66699 16.6722V3.32787C1.66699 2.87067 2.04642 2.50004 2.49349 2.50004H5.00032V0.833374H6.66699ZM10.0003 6.66671L13.3337 10H10.8337V13.3334H9.16699V10H6.66699L10.0003 6.66671ZM15.0003 0.833374V4.16671H8.33366V2.50004H13.3337V0.833374H15.0003Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default GalleryUploadLine;
