import React from 'react';
import PropTypes from 'prop-types';
import { SystemInformation2Line } from 'now-design-icons';
import Tooltip from '../tooltip';
import './Label.css';

const Label = ({
  children,
  size = 'large',
  required = false,
  info,
  className,
  width,
  style,
  ...props
}) => {


  const getLabelClasses = () => {
    const baseClass = 'label';
    const sizeClass = `label--${size}`;
    const requiredClass = required ? 'label--required' : '';
    const infoClass = info ? 'label--has-info' : '';

    return [baseClass, sizeClass, requiredClass, infoClass, className]
      .filter(Boolean)
      .join(' ');
  };

  const getTextClasses = () => {
    const baseClass = 'label__text';
    const typographyClass = size === 'small' ? 'bold-h5' : 'bold-h4';
    
    return [baseClass, typographyClass].filter(Boolean).join(' ');
  };

  const getRequiredClasses = () => {
    return 'label__required';
  };

  const getInfoClasses = () => {
    return 'label__info';
  };

  const renderInfoIcon = () => {
    if (!info) return null;

    return (
      <div className={getInfoClasses()}>
        <Tooltip content={info} position="top" trigger="hover">
          <SystemInformation2Line size={20} color="#D58C00" />
        </Tooltip>
      </div>
    );
  };

  const renderContent = () => {
    const textContent = (
      <span className={getTextClasses()}>
        {children}
      </span>
    );

    const requiredAsterisk = required && (
      <span className={getRequiredClasses()}>*</span>
    );

    const infoIcon = renderInfoIcon();

    // For large labels, wrap text and asterisk together
    if (size === 'large') {
      return (
        <>
          <div className="label__content">
            {textContent}
            {requiredAsterisk}
          </div>
          {infoIcon}
        </>
      );
    }

    // For small labels, keep inline layout
    return (
      <>
        {textContent}
        {requiredAsterisk}
        {infoIcon}
      </>
    );
  };

  return (
    <div 
      className={getLabelClasses()} 
      style={{ 
        width: width || (size === 'large' ? '218px' : 'auto'),
        ...style 
      }}
      {...props}
    >
      {renderContent()}
    </div>
  );
};

Label.propTypes = {
  /** The text content of the label */
  children: PropTypes.node.isRequired,
  /** Size variant of the label */
  size: PropTypes.oneOf(['small', 'large']),
  /** Whether the field is required (shows asterisk) */
  required: PropTypes.bool,
  /** Tooltip content for the info icon */
  info: PropTypes.string,
  /** Custom width for the label */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Additional CSS classes */
  className: PropTypes.string,
  /** Additional inline styles */
  style: PropTypes.object,
};

export default Label;
