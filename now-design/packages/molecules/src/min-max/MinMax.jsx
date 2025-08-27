import React, { useMemo } from 'react';
/**
 * MinMax Molecule
 *
 * A token-driven range control composed of two Input atoms with a shared Label.
 * Handles domain/order validation, optional regex/custom validator, helper text,
 * and unit adornments. Width can be controlled via fieldWidth/widths/fullWidth.
 *
 * @param {string} id - Base id; inputs become `${id}-min` and `${id}-max`.
 * @param {string} label - Group label shown above the pair.
 * @param {boolean} [required=false] - Shows required asterisk on label.
 * @param {string|React.ReactNode} [info] - Tooltip content for the label.
 * @param {{min?: string|number, max?: string|number}} value - Controlled value.
 * @param {(next:{min?:string|number,max?:string|number})=>void} onChange - Change handler.
 * @param {boolean} [disabled=false] - Disables both inputs.
 * @param {boolean} [readOnly=false] - Readonly state for both inputs.
 * @param {'number'|'text'|'tel'|'email'|'url'|'password'} [type='number'] - Input type.
 * @param {'text'|'email'|'numeric'|'tel'|'url'|'search'|'decimal'} [inputMode] - Mobile keyboard hint.
 * @param {number|'any'} [step='any'] - Numeric step.
 * @param {number} [precision] - Rounding precision for numeric parsing.
 * @param {{min?:number,max?:number}} [domain] - Absolute numeric bounds.
 * @param {boolean} [allowEqual=true] - If false, enforces min < max instead of <=.
 * @param {RegExp|string} [regex] - Text validation for each side (type='text').
 * @param {(value:{min?:any,max?:any})=>({valid?:boolean,status?:'error'|'warning'|'success',message?:string})} [validator]
 *        - Custom validator; can elevate to warning/success and return a message.
 * @param {string|React.ReactNode} [helperText] - Helper/validation message under the pair.
 * @param {string|React.ReactNode} [unit] - End adornment rendered inside each field.
 * @param {string} [nameMin] - Form name for the min input.
 * @param {string} [nameMax] - Form name for the max input.
 * @param {string} [ariaLabelMin='Minimum'] - A11y label for min input.
 * @param {string} [ariaLabelMax='Maximum'] - A11y label for max input.
 * @param {boolean} [fullWidth=false] - Inputs stretch to container width.
 * @param {string|number} [fieldWidth] - Fixed width applied to both inputs.
 * @param {{min?:string|number,max?:string|number}} [widths] - Per-field width override.
 */
import PropTypes from 'prop-types';
import { Input, Label } from 'now-design-atoms';
import './MinMax.css';

function normalizeNumber(value, precision) {
  if (value === undefined || value === null || value === '') return undefined;
  const num = typeof value === 'number' ? value : Number(value);
  if (Number.isNaN(num)) return undefined;
  return typeof precision === 'number' ? Number(num.toFixed(precision)) : num;
}

const MinMax = ({
  id,
  label,
  required = false,
  info,
  value,
  onChange,
  disabled = false,
  readOnly = false,
  type = 'number',
  inputMode,
  step = 'any',
  precision,
  domain,
  allowEqual = true,
  regex,
  validator,
  helperText,
  unit,
  nameMin,
  nameMax,
  ariaLabelMin = 'Minimum',
  ariaLabelMax = 'Maximum',
  fullWidth = false,
  fieldWidth,
  widths,
}) => {
  const minId = id ? `${id}-min` : undefined;
  const maxId = id ? `${id}-max` : undefined;

  const parsedMin = useMemo(() => normalizeNumber(value?.min, precision), [value?.min, precision]);
  const parsedMax = useMemo(() => normalizeNumber(value?.max, precision), [value?.max, precision]);

  const isText = type === 'text';

  const checkRegex = (val) => {
    if (!isText || !regex) return true;
    const re = typeof regex === 'string' ? new RegExp(regex) : regex;
    return re ? re.test(String(val ?? '')) : true;
  };

  const domainMinOk = domain?.min === undefined || (parsedMin === undefined ? true : parsedMin >= domain.min);
  const domainMaxOk = domain?.max === undefined || (parsedMax === undefined ? true : parsedMax <= domain.max);

  const orderOk = (() => {
    if (parsedMin === undefined || parsedMax === undefined) return true;
    return allowEqual ? parsedMin <= parsedMax : parsedMin < parsedMax;
  })();

  const minRegexOk = checkRegex(value?.min);
  const maxRegexOk = checkRegex(value?.max);

  const custom = typeof validator === 'function' ? validator({ min: value?.min, max: value?.max }) : undefined;

  const groupError = (!domainMinOk || !domainMaxOk || !orderOk || !minRegexOk || !maxRegexOk || (custom && custom.valid === false));
  const groupStatus = custom?.status ? custom.status : (groupError ? 'error' : undefined);
  const groupMessage = custom?.message;

  const statusMin = (() => {
    if (!domainMinOk) return 'error';
    if (!minRegexOk) return 'error';
    if (!orderOk && parsedMin !== undefined && parsedMax !== undefined) return 'error';
    return custom?.status === 'warning' || custom?.status === 'success' ? custom.status : undefined;
  })();

  const statusMax = (() => {
    if (!domainMaxOk) return 'error';
    if (!maxRegexOk) return 'error';
    if (!orderOk && parsedMin !== undefined && parsedMax !== undefined) return 'error';
    return custom?.status === 'warning' || custom?.status === 'success' ? custom.status : undefined;
  })();

  const handleMinChange = (e) => {
    const next = e?.target?.value;
    onChange?.({ min: next, max: value?.max });
  };

  const handleMaxChange = (e) => {
    const next = e?.target?.value;
    onChange?.({ min: value?.min, max: next });
  };

  const describedById = id ? `${id}-helper` : undefined;
  const ariaInvalid = groupStatus === 'error' ? true : undefined;

  const unitNode = unit ? (
    <span className="minmax__unit" aria-hidden="true">{unit}</span>
  ) : undefined;

  const gridTemplate = (() => {
    if (widths && (widths.min || widths.max)) {
      const left = widths.min ? (typeof widths.min === 'number' ? `${widths.min}px` : widths.min) : '1fr';
      const right = widths.max ? (typeof widths.max === 'number' ? `${widths.max}px` : widths.max) : '1fr';
      return `${left} auto ${right}`;
    }
    if (fieldWidth) {
      const w = typeof fieldWidth === 'number' ? `${fieldWidth}px` : fieldWidth;
      return `${w} auto ${w}`;
    }
    return '1fr auto 1fr';
  })();

  return (
    <div className={["minmax", groupStatus ? `minmax--${groupStatus}` : '', disabled ? 'minmax--disabled' : ''].filter(Boolean).join(' ')} aria-invalid={ariaInvalid} style={{ '--minmax-grid': gridTemplate }}>
      {label && (
        <div className="minmax__label">
          <Label size="large" required={required} info={info}>{label}</Label>
        </div>
      )}

      <div className="minmax__fields">
        <Input
          id={minId}
          name={nameMin}
          value={value?.min ?? ''}
          onChange={handleMinChange}
          placeholder={isText ? 'Min' : 'Min'}
          disabled={disabled}
          type={type}
          inputMode={inputMode}
          status={statusMin}
          icon={unitNode}
          aria-label={ariaLabelMin}
          aria-describedby={describedById}
          style={fullWidth ? { width: '100%' } : undefined}
        />

        <div className="minmax__separator" aria-hidden>to</div>

        <Input
          id={maxId}
          name={nameMax}
          value={value?.max ?? ''}
          onChange={handleMaxChange}
          placeholder={isText ? 'Max' : 'Max'}
          disabled={disabled}
          type={type}
          inputMode={inputMode}
          status={statusMax}
          icon={unitNode}
          aria-label={ariaLabelMax}
          aria-describedby={describedById}
          style={fullWidth ? { width: '100%' } : undefined}
        />
      </div>

      {(helperText || groupMessage) && (
        <div id={describedById} className="minmax__helper" aria-live="polite">
          {groupMessage || helperText}
        </div>
      )}
    </div>
  );
};

MinMax.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  info: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  value: PropTypes.shape({ min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]) }).isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  type: PropTypes.oneOf(['number','text','tel','email','url','password']),
  inputMode: PropTypes.oneOf(['text','email','numeric','tel','url','search','decimal']),
  step: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['any'])]),
  precision: PropTypes.number,
  domain: PropTypes.shape({ min: PropTypes.number, max: PropTypes.number }),
  allowEqual: PropTypes.bool,
  regex: PropTypes.oneOfType([PropTypes.instanceOf(RegExp), PropTypes.string]),
  validator: PropTypes.func,
  helperText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  unit: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  nameMin: PropTypes.string,
  nameMax: PropTypes.string,
  ariaLabelMin: PropTypes.string,
  ariaLabelMax: PropTypes.string,
};

export default MinMax;


