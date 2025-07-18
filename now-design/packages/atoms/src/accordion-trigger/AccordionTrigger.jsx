import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../typography/Typography';
import Icon from '../icon/Icon';
import './AccordionTrigger.css';

/**
 * AccordionTrigger Atom
 * Props:
 * - label: string (required)
 * - expanded: boolean (required)
 * - onToggle: function (required)
 * - icon: string (icon name, optional, defaults to 'SystemAddFill')
 * - className: string (optional)
 * - style: object (optional)
 */
const AccordionTrigger = ({ label, expanded, onToggle, icon = 'SystemAddFill', className = '', style = {} }) => (
  <button
    type="button"
    aria-expanded={expanded}
    aria-label={label}
    onClick={onToggle}
    className={`accordion-trigger ${className}`}
    style={style}
  >
    <Icon icon={icon} className="accordion-trigger-icon" />
    <Typography className="regular-h4 accordion-trigger-label">{label}</Typography>
    <Icon icon={expanded ? 'ChevronUpLine' : 'ChevronDownLine'} className="accordion-trigger-chevron" />
  </button>
);

AccordionTrigger.propTypes = {
  label: PropTypes.string.isRequired,
  expanded: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  icon: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default AccordionTrigger; 