import React from 'react';

const FilePaper2Line = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M16.6668 1.66663C18.0476 1.66663 19.1668 2.78592 19.1668 4.16663V5.83329H17.5002V15.8333C17.5002 17.214 16.3809 18.3333 15.0002 18.3333H3.3335C1.95279 18.3333 0.833496 17.214 0.833496 15.8333V14.1666H14.1668V15.8333C14.1668 16.2606 14.4885 16.6129 14.903 16.661L15.0002 16.6666C15.4275 16.6666 15.7797 16.345 15.8279 15.9305L15.8335 15.8333V3.33329H5.00016C4.5728 3.33329 4.22057 3.65499 4.17244 4.06944L4.16683 4.16663V12.5H2.50016V4.16663C2.50016 2.78592 3.61945 1.66663 5.00016 1.66663H16.6668Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FilePaper2Line;
