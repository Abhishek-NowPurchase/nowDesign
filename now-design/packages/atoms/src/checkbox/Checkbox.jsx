import React from 'react';
import PropTypes from 'prop-types';
import './Checkbox.css';

const Checkbox = ({
  checked = false,
  disabled = false,
  children,
  className = '',
  onChange,
  id,
  name,
  value,
  ...props
}) => {
  const getCheckboxClasses = () => {
    const baseClass = 'checkbox';
    const disabledClass = disabled ? 'checkbox--disabled' : '';
    
    return [
      baseClass,
      disabledClass,
      className
    ].filter(Boolean).join(' ');
  };

  const getCheckboxInputClasses = () => {
    const baseClass = 'checkbox__input';
    const checkedClass = checked ? 'checkbox__input--checked' : '';
    
    return [
      baseClass,
      checkedClass
    ].filter(Boolean).join(' ');
  };

  const handleChange = (e) => {
    if (!disabled && onChange) {
      onChange(e);
    }
  };



  return (
    <label className={getCheckboxClasses()}>
      <input
        type="checkbox"
        className={getCheckboxInputClasses()}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        id={id}
        name={name}
        value={value}
        {...props}
      />
      
      <div className="checkbox__checkmark">
        <svg 
          className="checkbox__icon" 
          viewBox="0 0 24 24" 
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="20,6 9,17 4,12" />
        </svg>
      </div>
      
      {children && (
        <span className="checkbox__text bold-h4">
          {children}
        </span>
      )}
    </label>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string
};

export default Checkbox;
