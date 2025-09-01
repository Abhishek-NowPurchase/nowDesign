import React from 'react';
import Tooltip from './Tooltip';

export default {
  title: 'Atoms/Tooltip',
  component: Tooltip,
};

export const HoverTop = () => (
  <div style={{ padding: 40 }}>
    <Tooltip content="This is a tooltip" position="top">
      <button>Hover me</button>
    </Tooltip>
  </div>
);

export const ClickRight = () => (
  <div style={{ padding: 40 }}>
    <Tooltip content="Opens on click" position="right" trigger="click">
      <button>Click me</button>
    </Tooltip>
  </div>
);

export const FocusBottom = () => (
  <div style={{ padding: 40 }}>
    <Tooltip content="Appears on focus" position="bottom" trigger="focus">
      <input placeholder="Focus me" />
    </Tooltip>
  </div>
);


