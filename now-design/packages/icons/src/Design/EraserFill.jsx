import React from 'react';

const EraserFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M11.6666 15.8306H17.4999V17.4972H9.99992L6.66857 17.4993L1.26214 12.0928C0.936708 11.7674 0.936708 11.2398 1.26214 10.9143L10.101 2.0755C10.4264 1.75006 10.9541 1.75006 11.2795 2.0755L17.7613 8.55731C18.0867 8.88273 18.0867 9.41039 17.7613 9.73581L11.6666 15.8306ZM13.0472 12.0928L15.9935 9.14656L10.6902 3.84327L7.74396 6.78954L13.0472 12.0928Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default EraserFill;
