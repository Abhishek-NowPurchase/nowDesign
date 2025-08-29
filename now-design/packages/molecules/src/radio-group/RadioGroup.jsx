import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Radio, Label } from 'now-design-atoms';
import './RadioGroup.css';

/**
 * RadioGroup (Molecule)
 *
 * Manages a set of Radio atoms: selection, keyboard navigation (arrow keys,
 * Home/End), and validation messaging. Uses role="radiogroup" and wires A11y.
 *
 * @param {string} id
 * @param {string} label
 * @param {boolean} [required]
 * @param {string|React.ReactNode} [info]
 * @param {string|number} value - Controlled selected value
 * @param {(next:string|number)=>void} onChange
 * @param {Array<{value:string|number,label:React.ReactNode,description?:React.ReactNode,disabled?:boolean}>} options
 * @param {'horizontal'|'vertical'} [orientation='vertical']
 * @param {boolean} [wrap=false]
 * @param {'s'|'m'|'l'} [size='m']
 * @param {'error'|'warning'|'success'} [status]
 * @param {string|React.ReactNode} [helperText]
 * @param {boolean} [disabled]
 */
const RadioGroup = ({
  id,
  label,
  required,
  info,
  value,
  onChange,
  options,
  orientation = 'vertical',
  wrap = false,
  size = 'm',
  status,
  helperText,
  disabled,
}) => {
  const groupId = id || undefined;
  const describedById = groupId ? `${groupId}-helper` : undefined;

  const handleKeyDown = useCallback((e) => {
    if (!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End'].includes(e.key)) return;
    const enabled = options.filter(o => !o.disabled);
    if (!enabled.length) return;
    const currentIndex = enabled.findIndex(o => o.value === value);
    let nextIndex = currentIndex;
    if (e.key === 'Home') nextIndex = 0;
    else if (e.key === 'End') nextIndex = enabled.length - 1;
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') nextIndex = Math.max(0, currentIndex <= 0 ? enabled.length - 1 : currentIndex - 1);
    else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') nextIndex = (currentIndex + 1) % enabled.length;
    const next = enabled[nextIndex]?.value;
    if (next !== undefined && next !== value) {
      e.preventDefault();
      onChange?.(next);
    }
  }, [options, value, onChange]);

  const groupClass = [
    'radiogroup',
    `radiogroup--${orientation}`,
    wrap ? 'radiogroup--wrap' : '',
    status ? `radiogroup--${status}` : '',
    disabled ? 'radiogroup--disabled' : '',
  ].filter(Boolean).join(' ');

  return (
    <div className={groupClass} role="radiogroup" aria-labelledby={groupId ? `${groupId}-label` : undefined} aria-describedby={describedById} aria-invalid={status === 'error' ? true : undefined} onKeyDown={handleKeyDown}>
      {label && (
        <div id={groupId ? `${groupId}-label` : undefined} className="radiogroup__label">
          <Label size="large" required={required} info={info}>{label}</Label>
        </div>
      )}

      <div className="radiogroup__options">
        {options.map((opt) => (
          <Radio
            key={String(opt.value)}
            name={groupId}
            value={opt.value}
            checked={value === opt.value}
            disabled={disabled || opt.disabled}
            size={size}
            label={opt.label}
            description={opt.description}
            status={status}
            onChange={() => onChange?.(opt.value)}
          />
        ))}
      </div>

      {helperText && (
        <div id={describedById} className="radiogroup__helper" aria-live="polite">{helperText}</div>
      )}
    </div>
  );
};

RadioGroup.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  info: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    label: PropTypes.node.isRequired,
    description: PropTypes.node,
    disabled: PropTypes.bool,
  })).isRequired,
  orientation: PropTypes.oneOf(['horizontal','vertical']),
  wrap: PropTypes.bool,
  size: PropTypes.oneOf(['s','m','l']),
  status: PropTypes.oneOf(['error','warning','success']),
  helperText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  disabled: PropTypes.bool,
};

export default RadioGroup;


