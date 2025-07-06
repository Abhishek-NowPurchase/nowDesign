import React from 'react';

const StarOffLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M19.5113 7.32658L15.0179 11.482L13.8385 10.3026L15.7269 8.55625L11.6995 8.0787L10.0008 4.39593L9.34774 5.81179L8.09167 4.55573L10.0008 0.416748L12.8222 6.53347L19.5113 7.32658ZM7.04937 8.22723L4.27467 8.55625L7.25225 11.3098L6.46185 15.2877L10.0008 13.3068L13.5397 15.2877L13.3984 14.5762L7.04937 8.22723ZM15.519 16.6968L15.8787 18.5069L10.0008 15.2168L4.12295 18.5069L5.43573 11.9L0.490234 7.32658L5.54892 6.72679L1.16197 2.33982L2.34048 1.16131L18.8397 17.6605L17.6612 18.839L15.519 16.6968Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default StarOffLine;
