import React from "react";

const WeatherHazeLine = props => (
  <svg viewBox="0 0 20 20" fill="currentColor" width="1em" height="1em" {...props}>
    <path
      d="M5.07 10.833a5 5 0 119.862 0h-1.703a3.333 3.333 0 10-6.457 0H5.07zM1.667 12.5h8.334v1.667H1.667V12.5zm10 0h6.667v1.667h-6.667V12.5zm1.667 3.333h3.333V17.5h-3.333v-1.667zm-10 0h8.333V17.5H3.334v-1.667zm5.833-15h1.667v2.5H9.167v-2.5zM2.93 4.107L4.108 2.93l1.768 1.768-1.179 1.178L2.93 4.107zM15.893 2.93l1.179 1.178-1.768 1.768-1.179-1.178 1.768-1.768zm3.274 6.238v1.666h-2.5V9.167h2.5zm-15.833 0v1.666h-2.5V9.167h2.5z"
      fill="currentColor"
    />
  </svg>
);

export default WeatherHazeLine;
