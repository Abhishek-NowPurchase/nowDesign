import React from "react";

const DesignGridLine = props => (
  <svg viewBox="0 0 20 20" fill="currentColor" width="1em" height="1em" {...props}>
    <path
      d="M11.667 8.333H8.333v3.334h3.334V8.333zm1.666 0v3.334h2.5V8.333h-2.5zm-1.666 7.5v-2.5H8.333v2.5h3.334zm1.666 0h2.5v-2.5h-2.5v2.5zM11.667 4.167H8.333v2.5h3.334v-2.5zm1.666 0v2.5h2.5v-2.5h-2.5zM6.667 8.333h-2.5v3.334h2.5V8.333zm0 7.5v-2.5h-2.5v2.5h2.5zm0-11.666h-2.5v2.5h2.5v-2.5zM3.333 2.5h13.334c.46 0 .833.373.833.833v13.334c0 .46-.373.833-.833.833H3.333a.833.833 0 01-.833-.833V3.333c0-.46.373-.833.833-.833z"
      fill="currentColor"
    />
  </svg>
);

export default DesignGridLine;
