import React from 'react';
import PropTypes from 'prop-types';
import './Radio.css';

/**
 * Radio (Atom)
 *
 * A token-driven radio button. Renders a native <input type="radio"> for
 * semantics and form submission, and a styled wrapper for visuals. Keyboard
 * focus ring appears only on focus-visible (Tab).
 *
 * @param {string} id - Unique id for the radio input
 * @param {string} name - Radio group name (native grouping)
 * @param {string|number} value - Value submitted when selected
 * @param {boolean} [checked] - Controlled selection state
 * @param {boolean} [defaultChecked] - Uncontrolled initial selection
 * @param {boolean} [disabled=false] - Disable interaction
 * @param {boolean} [readOnly=false] - Read-only visual and semantics
 * @param {'s'|'m'|'l'} [size='m'] - Control size
 * @param {'right'|'left'|'top'|'bottom'} [labelPlacement='right'] - Label position
 * @param {'error'|'warning'|'success'} [status] - Validation skin (rare at atom level)
 * @param {React.ReactNode} label - Primary label node
 * @param {React.ReactNode} [description] - Secondary text under/next to label
 * @param {(e: React.ChangeEvent<HTMLInputElement>)=>void} [onChange] - Change handler
 * @param {(e: React.FocusEvent<HTMLInputElement>)=>void} [onFocus]
 * @param {(e: React.FocusEvent<HTMLInputElement>)=>void} [onBlur]
 * @param {(e: React.KeyboardEvent<HTMLInputElement>)=>void} [onKeyDown]
 * @param {string} [className]
 * @param {object} [style]
 */
const Radio = ({
  id,
  name,
  value,
  checked,
  defaultChecked,
  disabled = false,
  readOnly = false,
  size = 'm',
  labelPlacement = 'right',
  status,
  label,
  description,
  onChange,
  onFocus,
  onBlur,
  onKeyDown,
  className,
  style,
  ...rest
}) => {
  const wrapperClass = [
    'radio',
    `radio--${size}`,
    labelPlacement !== 'right' ? `radio--label-${labelPlacement}` : '',
    disabled ? 'radio--disabled' : '',
    readOnly ? 'radio--readonly' : '',
    status ? `radio--${status}` : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <label className={wrapperClass} style={style} aria-disabled={disabled || undefined}>
      {/* Native input for semantics */}
      <input
        id={id}
        className="radio__native"
        type="radio"
        name={name}
        value={value}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        readOnly={readOnly}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        {...rest}
      />

      {/* Custom control */}
      <span className="radio__control" aria-hidden>
        <span className="radio__dot" />
      </span>

      {label && (
        <span className="radio__label">
          <span className="radio__labelText">{label}</span>
          {description && <span className="radio__description">{description}</span>}
        </span>
      )}
    </label>
  );
};

Radio.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  size: PropTypes.oneOf(['s','m','l']),
  labelPlacement: PropTypes.oneOf(['right','left','top','bottom']),
  status: PropTypes.oneOf(['error','warning','success']),
  label: PropTypes.node,
  description: PropTypes.node,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onKeyDown: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Radio;


