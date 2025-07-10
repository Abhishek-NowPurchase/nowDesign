import React from "react";

const WeatherFahrenheitLine = props => (
  <svg viewBox="0 0 20 20" fill="currentColor" width="1em" height="1em" {...props}>
    <path
      d="M10 10h5.834v1.667h-5.833V17.5H8.334V6.667a3.333 3.333 0 013.333-3.334h5.834V5h-5.834c-.92 0-1.666.746-1.666 1.667V10zM3.75 8.333a2.917 2.917 0 110-5.833 2.917 2.917 0 010 5.833zm0-1.666a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"
      fill="currentColor"
    />
  </svg>
);

export default WeatherFahrenheitLine;
