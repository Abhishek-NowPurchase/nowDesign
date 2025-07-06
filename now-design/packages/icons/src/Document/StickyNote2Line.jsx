import React from 'react';

const StickyNote2Line = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M3.33188 17.5C2.87245 17.5 2.5 17.1292 2.5 16.6722V3.32783C2.5 2.87063 2.87079 2.5 3.32783 2.5H16.6722C17.1293 2.5 17.5 2.87291 17.5 3.33208V13.3333L13.3307 17.5H3.33188ZM4.16667 15.8333H12.6407L15.8333 12.6427V4.16667H4.16667V15.8333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default StickyNote2Line;
