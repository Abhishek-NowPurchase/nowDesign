import React from 'react';

const MedicalCapsuleLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M16.4818 3.51818C18.4344 5.4708 18.4344 8.63665 16.4818 10.5892L10.5893 16.4818C8.63659 18.4344 5.4708 18.4344 3.51817 16.4818C1.56556 14.5291 1.56556 11.3634 3.51817 9.41073L9.41076 3.51818C11.3633 1.56555 14.5292 1.56555 16.4818 3.51818ZM11.7683 12.9456L7.0543 8.23163L4.69669 10.5892C3.39494 11.891 3.39494 14.0016 4.69669 15.3033C5.99843 16.6051 8.10898 16.6051 9.41076 15.3033L11.7683 12.9456ZM15.3033 4.69669C14.0015 3.39494 11.891 3.39494 10.5893 4.69669L8.23281 7.05312L12.9468 11.7671L15.3033 9.41073C16.605 8.10899 16.605 5.99844 15.3033 4.69669Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MedicalCapsuleLine;
