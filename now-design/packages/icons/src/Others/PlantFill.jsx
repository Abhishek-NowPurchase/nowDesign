import React from 'react';

const PlantFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M17.4983 2.49996V4.16663C17.4983 7.38828 14.8867 9.99996 11.665 9.99996H10.8317V10.8333H14.9983V16.6666C14.9983 17.5871 14.2522 18.3333 13.3317 18.3333H6.66504C5.74456 18.3333 4.99837 17.5871 4.99837 16.6666V10.8333H9.165V8.33329C9.165 5.11163 11.7767 2.49996 14.9983 2.49996H17.4983ZM4.58171 1.66663C6.68889 1.66663 8.5525 2.70943 9.68467 4.30713C8.8355 5.42566 8.33171 6.82064 8.33171 8.33329V9.16662H7.91504C4.46326 9.16662 1.66504 6.36841 1.66504 2.91663V1.66663H4.58171Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default PlantFill;
