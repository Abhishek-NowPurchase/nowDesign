import React from 'react';

const ControlPlanFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M18.9502 14.9935L14.9925 19L12.1662 16.1382L13.2967 14.9935L14.9925 16.7106L17.8189 13.848L18.9502 14.9935Z" fill="#E3E3E3"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M17.391 6.04762V12.3641C17.3326 12.3299 17.2722 12.2987 17.2122 12.2669L16.1863 11.8677C15.8045 11.7686 15.4048 11.7143 14.9925 11.7143C12.3432 11.7143 10.1955 13.8889 10.1955 16.5714L10.3688 17.8687C10.3985 17.9775 10.4319 18.0849 10.4688 18.1905H3.79404L3.71284 18.1865C3.31241 18.1444 3 17.7944 3 17.3873V2.80241C3.0002 2.35929 3.3577 2.0002 3.79794 2H13.3935L17.391 6.04762ZM6.59775 11.3095V12.5238H10.1955V11.3095H6.59775ZM6.59775 10.0952H13.7933V8.88095H6.59775V10.0952ZM6.59775 7.66667H10.1955V6.45238H6.59775V7.66667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ControlPlanFill;
