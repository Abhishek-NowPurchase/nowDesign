import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Input, Label } from 'now-design-atoms';
import './TextInput.css';

/**
 * Text input with floating label, inline validation, and accessibility helpers.
 *
 * @param {Object} props
 * @param {string} [props.id] Optional unique id used for accessibility bindings.
 * @param {string} props.label Visible label shown in small/large variants.
 * @param {boolean} [props.required=false] Marks the field as required on the label.
 * @param {string|React.ReactElement} [props.info] Additional info icon/tooltip content for the label.
 * @param {string} props.value Controlled input value.
 * @param {function(Event): void} props.onChange Change handler for the underlying input.
 * @param {function(Event): void} [props.onFocus] Focus handler.
 * @param {function(Event): void} [props.onBlur] Blur handler.
 * @param {React.ReactNode} [props.icon] Optional leading icon for the input.
 * @param {string} [props.iconColor] Color applied to the icon.
 * @param {string} [props.className] Additional container class names.
 * @param {string} [props.placeholder='Start typing...'] Placeholder text when focused.
 * @param {boolean} [props.disabled=false] If true, disables interaction when the input is filled.
 * @param {'error'|'success'|'warning'} [props.status] External status that overrides internal validation.
 * @param {'text'|'email'|'number'|'password'|'tel'|'url'} [props.type='text'] HTML input type.
 * @param {'text'|'email'|'numeric'|'tel'|'url'|'search'|'decimal'} [props.inputMode] HTML inputMode hint for mobile keyboards.
 * @param {RegExp|string} [props.regex] Regex used for simple validation.
 * @param {function(string): ({status?: 'error'|'success'|'warning', valid?: boolean})} [props.validator] Custom validator; can return a status or valid=false.
 * @param {'change'|'blur'|'submit'} [props.validateOn='blur'] When to validate; internal logic primarily validates on blur.
 * @param {boolean} [props.preventInvalid=false] Reserved for preventing invalid keystrokes (not enforced here).
 * @param {number} [props.maxLength] Maximum allowed length.
 * @param {number} [props.minLength] Minimum required length (if value present).
 * @param {string|React.ReactElement} [props.helperText] Optional helper text rendered below the input.
 * @returns {JSX.Element} Container with floating label and `Input` atom.
 */
const TextInput = ({
  id,
  label,
  required = false,
  info,
  value,
  onChange,
  onFocus,
  onBlur,
  icon,
  iconColor,
  className,
  placeholder = 'Start typing...',
  disabled = false,
  status,
  type = 'text',
  inputMode,
  regex,
  validator,
  validateOn = 'blur',
  preventInvalid = false,
  maxLength,
  minLength,
  helperText,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const isFilled = useMemo(() => Boolean(value && value.trim().length > 0), [value]);
  const isActive = isFocused || isFilled;
  const isDisabled = disabled && isFilled; // disabled only applies when filled

  const computeStatus = (val) => {
    if (status) return status; // external status wins
    const valueToCheck = val ?? value ?? '';
    // length checks
    if (typeof minLength === 'number' && valueToCheck.length > 0 && valueToCheck.length < minLength) {
      return 'error';
    }
    if (typeof maxLength === 'number' && valueToCheck.length > maxLength) {
      return 'error';
    }
    if (regex) {
      const re = typeof regex === 'string' ? new RegExp(regex) : regex;
      if (re && !re.test(valueToCheck)) return 'error';
    }
    if (typeof validator === 'function') {
      try {
        const res = validator(valueToCheck);
        if (res && res.status) return res.status;
        if (res && res.valid === false) return 'error';
      } catch (_) { /* ignore validator errors */ }
    }
    return undefined;
  };

  const getContainerClasses = () => {
    const statusClass = status ? `text-input--${status}` : '';
    return ['text-input', isActive ? 'text-input--active' : '', isDisabled ? 'text-input--disabled' : '', statusClass, className]
      .filter(Boolean)
      .join(' ');
  };

  const handleFocus = (e) => {
    setIsFocused(true);
    if (onFocus) onFocus(e);
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    if (onBlur) onBlur(e);
  };

  return (
    <div className={getContainerClasses()}>
      {/* Small floating label (visible when active) */}
      <div className="text-input__label-small" aria-hidden={!isActive}>
        <Label size="small" info={info} required={required}>
          {label}
        </Label>
      </div>

      {/* Large inline label (visible when NOT active) */}
      {!isActive && (
        <div className="text-input__label-large">
          <Label size="large" info={info} required={required}>
            {label}
          </Label>
        </div>
      )}

      <Input
        id={id}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        showPlaceholder={isFocused}
        icon={icon}
        iconColor={iconColor}
        disabled={isDisabled}
        status={computeStatus()}
        type={type}
        inputMode={inputMode}
        maxLength={maxLength}
        aria-invalid={computeStatus() === 'error'}
        aria-describedby={helperText && id ? `${id}-helper` : undefined}
        {...props}
      />

      {helperText && (
        <div id={id ? `${id}-helper` : undefined} className="text-input__helper" aria-live="polite">
          {helperText}
        </div>
      )}
    </div>
  );
};

TextInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  info: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  icon: PropTypes.node,
  iconColor: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  status: PropTypes.oneOf(['error', 'success', 'warning']),
  type: PropTypes.oneOf(['text','email','number','password','tel','url']),
  inputMode: PropTypes.oneOf(['text','email','numeric','tel','url','search','decimal']),
  regex: PropTypes.oneOfType([PropTypes.instanceOf(RegExp), PropTypes.string]),
  validator: PropTypes.func,
  validateOn: PropTypes.oneOf(['change','blur','submit']),
  preventInvalid: PropTypes.bool,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  helperText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default TextInput;


