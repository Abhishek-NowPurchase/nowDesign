import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AccordionTrigger, SelectableListItem } from 'now-design-atoms';
import './AccordionSelectableList.css';

/**
 * AccordionSelectableList Molecule
 * Props:
 * - accordionId: string (optional) - Unique ID for the accordion (required when used in group)
 * - triggerLabel: string (required) - Label for the accordion trigger
 * - triggerIcon: React component (optional) - Icon for the accordion trigger
 * - items: array (required) - Array of items with { id, label, icon, disabled }
 * - selectedItemId: string (optional) - ID of currently selected item
 * - isExpanded: boolean (optional) - Whether accordion is expanded (auto-managed if not provided)
 * - onItemSelect: function (required) - Callback when item is selected
 * - onToggle: function (optional) - Callback when accordion is toggled (auto-managed if not provided)
 * - className: string (optional)
 * - style: object (optional)
 */
const AccordionSelectableList = ({ 
  accordionId,
  triggerLabel, 
  triggerIcon, 
  items = [], 
  selectedItemId, 
  isExpanded: externalIsExpanded,
  onItemSelect, 
  onToggle: externalOnToggle,
  className = '', 
  style = {} 
}) => {
  // Internal state for standalone usage
  const [internalIsExpanded, setInternalIsExpanded] = useState(false);
  const [internalSelectedItemId, setInternalSelectedItemId] = useState(null);
  
  // Use external props if provided, otherwise use internal state
  const isExpanded = externalIsExpanded !== undefined ? externalIsExpanded : internalIsExpanded;
  const effectiveSelectedItemId = selectedItemId !== undefined ? selectedItemId : internalSelectedItemId;
  
  const [indicatorPosition, setIndicatorPosition] = useState(0);
  const [verticalLineHeight, setVerticalLineHeight] = useState('100%');
  const [verticalLineTop, setVerticalLineTop] = useState(0);
  const itemsContainerRef = React.useRef(null);
  const itemRefs = React.useRef({});
  const triggerRef = React.useRef(null);

  // Helper function to check if item is selected
  const isItemSelected = (itemId) => {
    return effectiveSelectedItemId === itemId;
  };

  // Helper function to check if selected item is in this accordion
  const hasSelectedItem = () => {
    return effectiveSelectedItemId && items.some(item => item.id === effectiveSelectedItemId);
  };

  // Helper function to get parent container rect
  const getParentContainerRect = () => {
    if (!triggerRef.current) return null;
    const parentContainer = triggerRef.current.parentElement;
    return parentContainer ? parentContainer.getBoundingClientRect() : null;
  };

  // Helper function to calculate relative position
  const calculateRelativePosition = (elementRect, parentRect) => {
    return elementRect.top - parentRect.top;
  };

  // Helper function to calculate indicator position
  const calculateIndicatorPosition = (itemRect, parentRect) => {
    const relativeTop = calculateRelativePosition(itemRect, parentRect);
    const itemHeight = itemRect.height;
    const indicatorHeight = 20; // Height of the blue indicator
    return relativeTop + (itemHeight / 2) - (indicatorHeight / 2);
  };

  // Helper function to update indicator position
  const updateIndicatorPosition = () => {
    if (!isExpanded || !hasSelectedItem() || !itemsContainerRef.current) return;

    const selectedItemRef = itemRefs.current[effectiveSelectedItemId];
    if (!selectedItemRef) return;

    const parentRect = getParentContainerRect();
    if (!parentRect) return;

    const itemRect = selectedItemRef.getBoundingClientRect();
    const position = calculateIndicatorPosition(itemRect, parentRect);
    setIndicatorPosition(position);
  };

  // Helper function to retry indicator position update
  const retryIndicatorPositionUpdate = () => {
    setTimeout(() => {
      const retrySelectedItemRef = itemRefs.current[effectiveSelectedItemId];
      if (retrySelectedItemRef && itemsContainerRef.current) {
        const parentContainer = itemsContainerRef.current.parentElement;
        if (parentContainer) {
          const parentRect = parentContainer.getBoundingClientRect();
          const itemRect = retrySelectedItemRef.getBoundingClientRect();
          const position = calculateIndicatorPosition(itemRect, parentRect);
          setIndicatorPosition(position);
        }
      }
    }, 50);
  };

  // Helper function to calculate vertical line dimensions
  const calculateVerticalLineDimensions = () => {
    if (!triggerRef.current) return;

    const parentRect = getParentContainerRect();
    if (!parentRect) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const triggerBottom = triggerRect.bottom - parentRect.top;
    setVerticalLineTop(triggerBottom);

    if (!isExpanded || items.length === 0 || !itemsContainerRef.current) {
      setVerticalLineHeight('0px');
      return;
    }

    const lastItemRef = itemRefs.current[items[items.length - 1].id];
    if (lastItemRef) {
      const lastItemRect = lastItemRef.getBoundingClientRect();
      const relativeBottom = lastItemRect.bottom - parentRect.top;
      const height = relativeBottom - triggerBottom;
      setVerticalLineHeight(`${height}px`);
    } else {
      // Fallback to container height
      const containerRect = itemsContainerRef.current.getBoundingClientRect();
      const containerBottom = containerRect.bottom - parentRect.top;
      const height = containerBottom - triggerBottom;
      setVerticalLineHeight(`${height}px`);

      // Retry with delay for more accurate measurement
      setTimeout(() => {
        const retryLastItemRef = itemRefs.current[items[items.length - 1].id];
        if (retryLastItemRef) {
          const lastItemRect = retryLastItemRef.getBoundingClientRect();
          const relativeBottom = lastItemRect.bottom - parentRect.top;
          const height = relativeBottom - triggerBottom;
          setVerticalLineHeight(`${height}px`);
        }
      }, 100);
    }
  };

  // Helper function to attempt calculation with retries
  const attemptCalculation = (attempts = 0) => {
    if (attempts >= 10) return;

    const lastItemRef = itemRefs.current[items[items.length - 1].id];
    if (lastItemRef && itemsContainerRef.current && triggerRef.current) {
      calculateVerticalLineDimensions();
    } else {
      // Fallback calculation
      if (itemsContainerRef.current && triggerRef.current) {
        calculateVerticalLineDimensions();
      }
      setTimeout(() => attemptCalculation(attempts + 1), 50);
    }
  };

  // Helper function to handle resize
  const handleResize = () => {
    if (isExpanded && hasSelectedItem()) {
      updateIndicatorPosition();
    }
    calculateVerticalLineDimensions();
  };

  const handleItemSelect = (itemId) => {
    if (selectedItemId !== undefined) {
      // External mode - call parent callback
      onItemSelect(itemId);
    } else {
      // Internal mode - update internal state
      setInternalSelectedItemId(itemId);
      onItemSelect(itemId);
    }
  };

  const handleToggle = () => {
    if (externalOnToggle) {
      // External mode - call parent callback
      externalOnToggle(accordionId);
    } else {
      // Internal mode - update internal state
      setInternalIsExpanded(!internalIsExpanded);
    }
  };

  // Calculate indicator position when selected item changes
  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      updateIndicatorPosition();
      if (!itemRefs.current[effectiveSelectedItemId]) {
        retryIndicatorPositionUpdate();
      }
    }, 0);
    
    return () => clearTimeout(timeoutId);
  }, [isExpanded, effectiveSelectedItemId, items]);

  // Calculate vertical line position when accordion expands/collapses or items change
  React.useEffect(() => {
    const timeoutId = setTimeout(calculateVerticalLineDimensions, 0);
    return () => clearTimeout(timeoutId);
  }, [isExpanded, items]);

  // Additional effect specifically for initial expansion
  React.useEffect(() => {
    if (isExpanded && items.length > 0) {
      setTimeout(() => attemptCalculation(), 150);
    }
  }, [isExpanded, items]);

  // Update position and vertical line position on window resize
  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isExpanded, selectedItemId, items]);

  return (
    <div className={`accordion-selectable-list ${className}`} style={style}>
      {/* Vertical Line - Only show when expanded */}
      {isExpanded && items.length > 0 && (
        <div 
          className="accordion-selectable-list-vertical-line"
          style={{ 
            top: `${verticalLineTop}px`,
            height: verticalLineHeight 
          }}
        >
        </div>
      )}

      {/* Blue Selected Indicator */}
      {isExpanded && hasSelectedItem() && (
        <div 
          className="accordion-selectable-list-blue-indicator"
          style={{
            top: `${indicatorPosition}px`
          }}
        />
      )}

      {/* Accordion Trigger */}
      <div ref={triggerRef} className="accordion-selectable-list-trigger">
        <AccordionTrigger
          label={triggerLabel}
          expanded={isExpanded}
          onToggle={handleToggle}
          icon={triggerIcon}
        />
      </div>

      {/* Selectable List Items */}
      <div 
        ref={itemsContainerRef} 
        className={`accordion-selectable-list-items ${isExpanded ? 'expanded' : ''}`}
      >
        {items.map((item, index) => (
          <div 
            key={item.id} 
            className="accordion-selectable-list-item-wrapper"
            ref={(el) => {
              if (el) {
                itemRefs.current[item.id] = el;
              }
            }}
          >
            <SelectableListItem
              icon={item.icon}
              label={item.label}
              selected={isItemSelected(item.id)}
              onSelect={() => handleItemSelect(item.id)}
              disabled={item.disabled}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

AccordionSelectableList.propTypes = {
  accordionId: PropTypes.string,
  triggerLabel: PropTypes.string.isRequired,
  triggerIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    disabled: PropTypes.bool
  })).isRequired,
  selectedItemId: PropTypes.string,
  isExpanded: PropTypes.bool,
  onItemSelect: PropTypes.func.isRequired,
  onToggle: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default AccordionSelectableList; 