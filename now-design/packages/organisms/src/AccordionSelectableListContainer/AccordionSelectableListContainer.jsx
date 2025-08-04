import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AccordionSelectableList } from 'now-design-molecules';
import './AccordionSelectableListContainer.css';

/**
 * AccordionSelectableListContainer Component
 * Manages multiple AccordionSelectableList components with business rules:
 * - Only 2 accordions can be open at a time
 * - Only 1 SelectableListItem can be selected across all accordions
 * 
 * Props:
 * - accordionData: array (required) - Array of accordion configurations
 * - onItemSelect: function (optional) - Global callback when any item is selected
 * - className: string (optional)
 * - style: object (optional)
 */
const AccordionSelectableListContainer = ({ 
  accordionData = [], 
  onItemSelect, 
  defaultSelectedItemId, // New prop for default selection
  className = '', 
  style = {} 
}) => {
  const [expandedAccordions, setExpandedAccordions] = useState(() => {
    // Auto-expand accordion containing the default selected item
    if (defaultSelectedItemId) {
      const accordionWithItem = accordionData.find(accordion => 
        accordion.items.some(item => item.id === defaultSelectedItemId)
      );
      return accordionWithItem ? new Set([accordionWithItem.id]) : new Set();
    }
    return new Set();
  });
  const [selectedItemId, setSelectedItemId] = useState(defaultSelectedItemId || null);

  // Helper function to find accordion containing a specific item
  const findAccordionWithItem = (itemId) => {
    return accordionData.find(accordion => 
      accordion.items.some(item => item.id === itemId)
    );
  };

  // Helper function to check if accordion contains the selected item
  const accordionContainsSelectedItem = (accordionId) => {
    const accordion = accordionData.find(acc => acc.id === accordionId);
    return accordion && accordion.items.some(item => item.id === selectedItemId);
  };

  // Helper function to find accordions that don't contain the selected item
  const findAccordionsWithoutSelectedItem = (expandedAccordions) => {
    return Array.from(expandedAccordions).filter(accId => {
      const accordion = accordionData.find(acc => acc.id === accId);
      return !accordion || !accordion.items.some(item => item.id === selectedItemId);
    });
  };

  // Helper function to close an accordion
  const closeAccordion = (accordionId) => {
    setExpandedAccordions(prev => {
      const newExpanded = new Set(prev);
      newExpanded.delete(accordionId);
      return newExpanded;
    });
  };

  // Helper function to open an accordion (with limit enforcement)
  const openAccordion = (accordionId) => {
    setExpandedAccordions(prev => {
      const newExpanded = new Set(prev);
      
      // If we're at the limit, close an accordion that doesn't contain selected items
      if (newExpanded.size >= 2) {
        const accordionsWithoutSelected = findAccordionsWithoutSelectedItem(newExpanded);
        
        if (accordionsWithoutSelected.length > 0) {
          // Remove the first accordion that doesn't contain selected item
          newExpanded.delete(accordionsWithoutSelected[0]);
        } else {
          // If all open accordions contain selected items, don't open new one
          return newExpanded;
        }
      }
      
      newExpanded.add(accordionId);
      return newExpanded;
    });
  };

  // Helper function to ensure accordion containing an item is open
  const ensureAccordionOpen = (itemId) => {
    const accordionWithItem = findAccordionWithItem(itemId);
    
    if (accordionWithItem && !expandedAccordions.has(accordionWithItem.id)) {
      setExpandedAccordions(prev => {
        const newExpanded = new Set(prev);
        
        // If we're at the limit, close an accordion that doesn't contain selected items
        if (newExpanded.size >= 2) {
          const accordionsWithoutSelected = findAccordionsWithoutSelectedItem(newExpanded);
          
          if (accordionsWithoutSelected.length > 0) {
            newExpanded.delete(accordionsWithoutSelected[0]);
          }
        }
        
        // Open the accordion containing the selected item
        newExpanded.add(accordionWithItem.id);
        return newExpanded;
      });
    }
  };

  const handleAccordionToggle = (accordionId) => {
    if (expandedAccordions.has(accordionId)) {
      // Check if this accordion contains the selected item
      if (accordionContainsSelectedItem(accordionId)) {
        // Don't close accordion if it contains the selected item
        return;
      } else {
        // Close the accordion only if it doesn't contain selected item
        closeAccordion(accordionId);
      }
    } else {
      // Open the accordion (with limit enforcement)
      openAccordion(accordionId);
    }
  };

  const handleItemSelect = (itemId) => {
    setSelectedItemId(itemId);
    
    // Ensure the accordion containing this item is open
    ensureAccordionOpen(itemId);
    
    // Call the optional global callback
    if (onItemSelect) {
      onItemSelect(itemId);
    }
  };

  return (
    <div className={`accordion-selectable-list-container ${className}`} style={style}>
      {accordionData.map((accordion) => (
        <AccordionSelectableList
          key={accordion.id}
          accordionId={accordion.id}
          triggerLabel={accordion.triggerLabel}
          triggerIcon={accordion.triggerIcon}
          items={accordion.items}
          selectedItemId={selectedItemId}
          isExpanded={expandedAccordions.has(accordion.id)}
          onItemSelect={handleItemSelect}
          onToggle={handleAccordionToggle}
        />
      ))}
    </div>
  );
};

AccordionSelectableListContainer.propTypes = {
  accordionData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    triggerLabel: PropTypes.string.isRequired,
    triggerIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
      disabled: PropTypes.bool
    })).isRequired,
  })).isRequired,
  onItemSelect: PropTypes.func,
  defaultSelectedItemId: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default AccordionSelectableListContainer; 