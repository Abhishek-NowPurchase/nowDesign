import React from "react";

const MapDirectionLine = props => (
  <svg viewBox="0 0 20 20" fill="currentColor" width="1em" height="1em" {...props}>
    <g clipPath="url(#clip0_1531_276)">
      <path
        d="M10 2.929L2.929 10l7.07 7.071L17.072 10 10 2.929zm.59-1.768l8.249 8.25a.833.833 0 010 1.178l-8.25 8.25a.833.833 0 01-1.178 0l-8.25-8.25a.833.833 0 010-1.178l8.25-8.25a.833.833 0 011.178 0zm.243 7.172V6.25l2.917 2.917-2.917 2.916V10h-2.5v2.5H6.667V9.167c0-.46.373-.834.833-.834h3.333z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_1531_276">
        <path fill="currentColor" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default MapDirectionLine;
