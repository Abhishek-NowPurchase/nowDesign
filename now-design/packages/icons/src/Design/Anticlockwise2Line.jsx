import React from 'react';

const Anticlockwise2Line = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M11.1785 4.99997L12.7022 6.52366L11.5237 7.70218L7.98816 4.16663L11.5237 0.631104L12.7022 1.80962L11.1785 3.3333H13.3333C15.6345 3.3333 17.5 5.19878 17.5 7.49997V10.8333H15.8333V7.49997C15.8333 6.11926 14.7141 4.99997 13.3333 4.99997H11.1785ZM12.5 9.16667V17.5C12.5 17.9602 12.1269 18.3333 11.6667 18.3333H3.33333C2.8731 18.3333 2.5 17.9602 2.5 17.5V9.16667C2.5 8.70642 2.8731 8.3333 3.33333 8.3333H11.6667C12.1269 8.3333 12.5 8.70642 12.5 9.16667ZM10.8333 10H4.16667V16.6667H10.8333V10Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Anticlockwise2Line;
