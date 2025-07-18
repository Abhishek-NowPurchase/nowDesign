import React from 'react';
import Typography from '../typography/Typography';
import Icon from '../icon/Icon';
import './SelectableListItem.css';

/**
 * SelectableListItem Atom
 * Props:
 * - icon: string (icon name, required)
 * - label: string (required)
 * - selected: boolean (required)
 * - onSelect: function (required)
 * - disabled: boolean (optional)
 * - className: string (optional)
 * - style: object (optional)
 */
const SelectableListItem = ({ icon, label, selected, onSelect, disabled = false, className = '', style = {} }) => (
  <div
    role="option"
    aria-selected={selected}
    tabIndex={disabled ? -1 : 0}
    onClick={disabled ? undefined : onSelect}
    className={`selectable-list-item${selected ? ' selected' : ''}${disabled ? ' disabled' : ''} ${className}`}
    style={style}
  >
    {/* Blue bar indicator */}
    {selected && <div className="selectable-list-item-indicator" aria-hidden="true" />}
    <Icon icon={icon} size="icon-md" className="selectable-list-item-icon" aria-hidden="true" />
    <Typography className="bold-bodyLarge selectable-list-item-label">{label}</Typography>
  </div>
);

export default SelectableListItem; 