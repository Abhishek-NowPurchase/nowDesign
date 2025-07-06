import React from 'react';

const StickyNoteFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M12.5 11.6667L12.4028 11.6722C12.0202 11.7167 11.7167 12.0202 11.6722 12.4028L11.6667 12.5V17.5H3.33188C2.87245 17.5 2.5 17.1292 2.5 16.6722V3.32783C2.5 2.87063 2.87079 2.5 3.32783 2.5H16.6722C17.1293 2.5 17.5 2.87291 17.5 3.33208V11.6667H12.5ZM17.5 13.3333L13.3333 17.4975V13.3333H17.5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default StickyNoteFill;
