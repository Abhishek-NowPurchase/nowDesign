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

  // Calculate vertical line height and position
  const updateVerticalLinePosition = () => {
    if (triggerRef.current) {
      const parentContainer = triggerRef.current.parentElement;
      if (parentContainer) {
        const parentRect = parentContainer.getBoundingClientRect();
        const triggerRect = triggerRef.current.getBoundingClientRect();
        
        // Calculate the bottom of the trigger (where the vertical line should start)
        const triggerBottom = triggerRect.bottom - parentRect.top;
        setVerticalLineTop(triggerBottom);
        
        // Calculate the height to the last item
        if (isExpanded && items.length > 0 && itemsContainerRef.current) {
          const lastItemRef = itemRefs.current[items[items.length - 1].id];
          if (lastItemRef) {
            const lastItemRect = lastItemRef.getBoundingClientRect();
            const relativeBottom = lastItemRect.bottom - parentRect.top;
            const height = relativeBottom - triggerBottom;
            setVerticalLineHeight(`${height}px`);
          } else {
            // If last item ref is not available, try again after a short delay
            setTimeout(() => {
              const retryLastItemRef = itemRefs.current[items[items.length - 1].id];
              if (retryLastItemRef) {
                const lastItemRect = retryLastItemRef.getBoundingClientRect();
                const relativeBottom = lastItemRect.bottom - parentRect.top;
                const height = relativeBottom - triggerBottom;
                setVerticalLineHeight(`${height}px`);
              }
            }, 50);
          }
        } else {
          setVerticalLineHeight('0px');
        }
      }
    }
  };

  // Calculate indicator position and vertical line position when items change
  React.useEffect(() => {
    const updatePositions = () => {
      // Update indicator position - only if selected item is in this accordion
      if (isExpanded && effectiveSelectedItemId && items.some(item => item.id === effectiveSelectedItemId) && itemsContainerRef.current) {
        const selectedItemRef = itemRefs.current[effectiveSelectedItemId];
        if (selectedItemRef) {
          // Get the parent container (accordion-selectable-list)
          const parentContainer = itemsContainerRef.current.parentElement;
          if (parentContainer) {
            const parentRect = parentContainer.getBoundingClientRect();
            const itemRect = selectedItemRef.getBoundingClientRect();
            const relativeTop = itemRect.top - parentRect.top;
            const itemHeight = itemRect.height;
            const indicatorHeight = 20; // Height of the blue indicator
            
            // Position indicator at the center of the selected item
            const position = relativeTop + (itemHeight / 2) - (indicatorHeight / 2);
            setIndicatorPosition(position);
          }
        } else {
          // If selected item ref is not available, try again after a short delay
          setTimeout(() => {
            const retrySelectedItemRef = itemRefs.current[effectiveSelectedItemId];
            if (retrySelectedItemRef && itemsContainerRef.current) {
              const parentContainer = itemsContainerRef.current.parentElement;
              if (parentContainer) {
                const parentRect = parentContainer.getBoundingClientRect();
                const itemRect = retrySelectedItemRef.getBoundingClientRect();
                const relativeTop = itemRect.top - parentRect.top;
                const itemHeight = itemRect.height;
                const indicatorHeight = 20;
                
                const position = relativeTop + (itemHeight / 2) - (indicatorHeight / 2);
                setIndicatorPosition(position);
              }
            }
          }, 50);
        }
      }
      
      // Update vertical line position and height
      updateVerticalLinePosition();
    };

    // Use setTimeout to ensure DOM is fully rendered
    const timeoutId = setTimeout(updatePositions, 0);
    
    return () => clearTimeout(timeoutId);
  }, [isExpanded, selectedItemId, items]);

  // Additional effect specifically for initial expansion to ensure vertical line height is calculated correctly
  React.useEffect(() => {
    if (isExpanded && items.length > 0) {
      // Multiple attempts to ensure the calculation happens after DOM is ready
      const attemptCalculation = (attempts = 0) => {
        if (attempts >= 5) return; // Max 5 attempts
        
        const lastItemRef = itemRefs.current[items[items.length - 1].id];
        if (lastItemRef && itemsContainerRef.current && triggerRef.current) {
          updateVerticalLinePosition();
        } else {
          setTimeout(() => attemptCalculation(attempts + 1), 100);
        }
      };
      
      setTimeout(() => attemptCalculation(), 100);
    }
  }, [isExpanded, items]);

  // Additional effect specifically for blue indicator calculation on initial expansion
  React.useEffect(() => {
    if (isExpanded && effectiveSelectedItemId && items.some(item => item.id === effectiveSelectedItemId)) {
      // Multiple attempts to ensure the calculation happens after DOM is ready
      const attemptIndicatorCalculation = (attempts = 0) => {
        if (attempts >= 5) return; // Max 5 attempts
        
        const selectedItemRef = itemRefs.current[effectiveSelectedItemId];
        if (selectedItemRef && itemsContainerRef.current) {
          const parentContainer = itemsContainerRef.current.parentElement;
          if (parentContainer) {
            const parentRect = parentContainer.getBoundingClientRect();
            const itemRect = selectedItemRef.getBoundingClientRect();
            const relativeTop = itemRect.top - parentRect.top;
            const itemHeight = itemRect.height;
            const indicatorHeight = 20;
            
            const position = relativeTop + (itemHeight / 2) - (indicatorHeight / 2);
            setIndicatorPosition(position);
          }
        } else {
          setTimeout(() => attemptIndicatorCalculation(attempts + 1), 100);
        }
      };
      
      setTimeout(() => attemptIndicatorCalculation(), 100);
    }
  }, [isExpanded, effectiveSelectedItemId, items]);

  // Update position and vertical line position on window resize
  React.useEffect(() => {
    const handleResize = () => {
      if (isExpanded && effectiveSelectedItemId && items.some(item => item.id === effectiveSelectedItemId)) {
        const selectedItemRef = itemRefs.current[effectiveSelectedItemId];
        if (selectedItemRef && itemsContainerRef.current) {
          const parentContainer = itemsContainerRef.current.parentElement;
          if (parentContainer) {
            const parentRect = parentContainer.getBoundingClientRect();
            const itemRect = selectedItemRef.getBoundingClientRect();
            const relativeTop = itemRect.top - parentRect.top;
            const itemHeight = itemRect.height;
            const indicatorHeight = 20;
            
            const position = relativeTop + (itemHeight / 2) - (indicatorHeight / 2);
            setIndicatorPosition(position);
          }
        }
      }
      
      // Update vertical line position and height on resize
      updateVerticalLinePosition();
    };

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
      {isExpanded && effectiveSelectedItemId && items.some(item => item.id === effectiveSelectedItemId) && (
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
              selected={effectiveSelectedItemId === item.id}
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