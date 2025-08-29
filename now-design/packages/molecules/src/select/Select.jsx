import React, { useEffect, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Input, Label } from 'now-design-atoms';
import './Select.css';

/**
 * Select (Combobox) — single-select with search
 *
 * Token-driven, accessible combobox built on the Input atom. Supports
 * searchable listbox, keyboard navigation, badges, grouping (basic), helper
 * text and validation skins. This is the core; multi-select/async can extend it.
 *
 * @param {string} id - Base id for combobox/listbox linkage
 * @param {string} label - Field label
 * @param {boolean} [required]
 * @param {string|React.ReactNode} [info]
 * @param {string|number|null} value - Controlled selected value
 * @param {(next:string|number|null)=>void} onChange - Change handler
 * @param {Array<{value:string|number,label:React.ReactNode,description?:React.ReactNode,badge?:React.ReactNode,group?:string,disabled?:boolean}>} options
 * @param {boolean} [searchable=true]
 * @param {boolean} [searchInPanel=true] - When open, shows a search field inside the dropdown
 * @param {string} [placeholder]
 * @param {boolean} [clearable=false]
 * @param {boolean} [disabled=false]
 * @param {'error'|'warning'|'success'} [status]
 * @param {string|React.ReactNode} [helperText]
 * @param {(opt:any,state:{active:boolean,selected:boolean})=>React.ReactNode} [renderOption]
 */
const Select = ({
  id,
  label,
  required,
  info,
  value,
  onChange,
  options,
  searchable = true,
  searchInPanel = true,
  placeholder = 'Select...',
  clearable = false,
  disabled = false,
  status,
  helperText,
  renderOption,
}) => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [activeIndex, setActiveIndex] = useState(-1);
  const triggerRef = useRef(null);
  const listRef = useRef(null);
  const searchInputRef = useRef(null);

  const listboxId = id ? `${id}-listbox` : undefined;

  const selectedOption = useMemo(
    () => options?.find((o) => o.value === value) || null,
    [options, value]
  );

  const query = searchable ? inputValue.trim().toLowerCase() : '';
  const filtered = useMemo(() => {
    if (!Array.isArray(options)) return [];
    if (!query) return options;
    return options.filter((o) =>
      String(o.label ?? '').toLowerCase().includes(query)
    );
  }, [options, query]);

  useEffect(() => {
    if (!open) return;
    // Reset active index to selected or first item
    const idx = filtered.findIndex((o) => o.value === value);
    setActiveIndex(idx >= 0 ? idx : (filtered.length ? 0 : -1));
    if (searchable && searchInPanel) {
      setTimeout(() => searchInputRef.current?.querySelector('input')?.focus(), 0);
    }
  }, [open, filtered, value]);

  const openMenu = () => { if (!disabled) setOpen(true); };
  const closeMenu = () => setOpen(false);

  const handleFocus = () => { if (!disabled) openMenu(); };
  const handleBlur = (e) => {
    // Delay to allow option click
    requestAnimationFrame(() => {
      if (listRef.current && listRef.current.contains(document.activeElement)) return;
      if (triggerRef.current && triggerRef.current.contains(document.activeElement)) return;
      closeMenu();
      if (searchable && !selectedOption) setInputValue('');
      if (searchable && selectedOption) setInputValue(String(selectedOption.label ?? ''));
    });
  };

  const handleInputChange = (e) => {
    if (!searchable) return;
    setInputValue(e.target.value);
    if (!open) openMenu();
  };

  const selectAt = (idx) => {
    const opt = filtered[idx];
    if (!opt || opt.disabled) return;
    onChange?.(opt.value);
    setInputValue(String(opt.label ?? ''));
    closeMenu();
    triggerRef.current?.querySelector('input')?.blur();
  };

  const onKeyDown = (e) => {
    if (disabled) return;
    if (!open && ['ArrowDown','ArrowUp','Enter',' '].includes(e.key)) {
      e.preventDefault();
      openMenu();
      return;
    }
    if (!open) return;
    if (e.key === 'ArrowDown') { e.preventDefault(); setActiveIndex((i) => Math.min((i < 0 ? -1 : i) + 1, filtered.length - 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActiveIndex((i) => Math.max((i <= 0 ? 0 : i) - 1, 0)); }
    else if (e.key === 'Home') { e.preventDefault(); setActiveIndex(0); }
    else if (e.key === 'End') { e.preventDefault(); setActiveIndex(filtered.length - 1); }
    else if (e.key === 'Enter') { e.preventDefault(); if (activeIndex >= 0) selectAt(activeIndex); }
    else if (e.key === 'Escape') { e.preventDefault(); closeMenu(); }
  };

  const onSearchKeyDown = (e) => {
    if (disabled) return;
    if (e.key === 'ArrowDown') { e.preventDefault(); setActiveIndex((i) => Math.min((i < 0 ? -1 : i) + 1, filtered.length - 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActiveIndex((i) => Math.max((i <= 0 ? 0 : i) - 1, 0)); }
    else if (e.key === 'Home') { e.preventDefault(); setActiveIndex(0); }
    else if (e.key === 'End') { e.preventDefault(); setActiveIndex(filtered.length - 1); }
    else if (e.key === 'Enter') {
      e.preventDefault();
      const idx = activeIndex >= 0 ? activeIndex : (filtered.length ? 0 : -1);
      if (idx >= 0) selectAt(idx);
    } else if (e.key === 'Escape') { e.preventDefault(); closeMenu(); }
  };

  useEffect(() => {
    // Keep active option in view
    const el = listRef.current?.querySelector(`[data-index="${activeIndex}"]`);
    if (el && el.scrollIntoView) el.scrollIntoView({ block: 'nearest' });
  }, [activeIndex]);

  useEffect(() => {
    // Reflect selected label in trigger when not searching
    if (!open && selectedOption && searchable) {
      setInputValue(String(selectedOption.label ?? ''));
    }
  }, [open, selectedOption, searchable]);

  const caret = <span className="select__caret" aria-hidden>▾</span>;
  const clearBtn = clearable && value != null ? (
    <button type="button" className="select__clear" onMouseDown={(e)=>e.preventDefault()} onClick={()=>{ onChange?.(null); setInputValue(''); }} aria-label="Clear selection">×</button>
  ) : null;

  return (
    <div className={[ 'select', open ? 'select--open' : '', disabled ? 'select--disabled' : '', status ? `select--${status}` : '' ].filter(Boolean).join(' ')}>
      {label && (
        <div className="select__label">
          <Label size="large" required={required} info={info}>{label}</Label>
        </div>
      )}

      <div className="select__trigger" ref={triggerRef} onBlur={handleBlur}>
        <Input
          id={id}
          value={searchable ? inputValue : (selectedOption ? String(selectedOption.label ?? '') : '')}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          icon={caret}
          disabled={disabled}
          status={status}
          showPlaceholder={true}
        />
        {clearBtn}
      </div>

      {open && (
        <div className="select__popover" role="listbox" id={listboxId} ref={listRef}
          aria-labelledby={id}>
          {searchable && searchInPanel && (
            <div className="select__search" ref={searchInputRef}>
              <Input
                value={inputValue}
                onChange={handleInputChange}
                placeholder={placeholder || 'Search…'}
                showPlaceholder={true}
                onKeyDown={onSearchKeyDown}
              />
            </div>
          )}
          {filtered.length === 0 && (
            <div className="select__empty" aria-live="polite">No results</div>
          )}
          {filtered.map((opt, idx) => {
            const active = idx === activeIndex;
            const selected = value === opt.value;
            const row = (
              <div className={[ 'select__option', active ? 'is-active' : '', selected ? 'is-selected' : '', opt.disabled ? 'is-disabled' : '' ].filter(Boolean).join(' ')}
                   role="option" aria-selected={selected} data-index={idx} id={id ? `${id}-opt-${idx}` : undefined}
                   onMouseEnter={()=>setActiveIndex(idx)} onMouseDown={(e)=>e.preventDefault()} onClick={()=> selectAt(idx)}>
                <div className="select__optionMain">
                  <div className="select__optionLabel">{opt.label}</div>
                  {opt.description && <div className="select__optionDesc">{opt.description}</div>}
                </div>
                {opt.badge && <div className="select__optionBadge">{opt.badge}</div>}
              </div>
            );
            return renderOption ? renderOption(opt, { active, selected }) : row;
          })}
        </div>
      )}

      {helperText && (
        <div className="select__helper" aria-live="polite">{helperText}</div>
      )}
    </div>
  );
};

Select.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  info: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    label: PropTypes.node.isRequired,
    description: PropTypes.node,
    badge: PropTypes.node,
    group: PropTypes.string,
    disabled: PropTypes.bool,
  })).isRequired,
  searchable: PropTypes.bool,
  placeholder: PropTypes.string,
  clearable: PropTypes.bool,
  disabled: PropTypes.bool,
  status: PropTypes.oneOf(['error','warning','success']),
  helperText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  renderOption: PropTypes.func,
};

export default Select;


