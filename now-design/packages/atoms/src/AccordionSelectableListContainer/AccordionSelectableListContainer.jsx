import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AccordionSelectableList } from '../AccordionSelectableList';
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
  className = '', 
  style = {} 
}) => {
  const [expandedAccordions, setExpandedAccordions] = useState(new Set());
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleAccordionToggle = (accordionId) => {
    setExpandedAccordions(prev => {
      const newExpanded = new Set(prev);
      
      if (newExpanded.has(accordionId)) {
        // Check if this accordion contains the selected item
        const accordion = accordionData.find(acc => acc.id === accordionId);
        const hasSelectedItem = accordion && accordion.items.some(item => item.id === selectedItemId);
        
        if (hasSelectedItem) {
          // Don't close accordion if it contains the selected item
          return newExpanded;
        } else {
          // Close the accordion only if it doesn't contain selected item
          newExpanded.delete(accordionId);
        }
      } else {
        // Open the accordion (but respect the 2-accordion limit)
        if (newExpanded.size >= 2) {
          // Find accordions that don't contain the selected item
          const accordionsWithoutSelected = Array.from(newExpanded).filter(accId => {
            const accordion = accordionData.find(acc => acc.id === accId);
            return !accordion || !accordion.items.some(item => item.id === selectedItemId);
          });
          
          if (accordionsWithoutSelected.length > 0) {
            // Remove the first accordion that doesn't contain selected item
            newExpanded.delete(accordionsWithoutSelected[0]);
          } else {
            // If all open accordions contain selected items, don't open new one
            return newExpanded;
          }
        }
        newExpanded.add(accordionId);
      }
      
      return newExpanded;
    });
  };

  const handleItemSelect = (itemId) => {
    setSelectedItemId(itemId);
    
    // Find which accordion contains this item and ensure it's open
    const accordionWithItem = accordionData.find(accordion => 
      accordion.items.some(item => item.id === itemId)
    );
    
    if (accordionWithItem && !expandedAccordions.has(accordionWithItem.id)) {
      setExpandedAccordions(prev => {
        const newExpanded = new Set(prev);
        
        // If we're at the limit, close an accordion that doesn't contain selected items
        if (newExpanded.size >= 2) {
          const accordionsWithoutSelected = Array.from(newExpanded).filter(accId => {
            const accordion = accordionData.find(acc => acc.id === accId);
            return !accordion || !accordion.items.some(item => item.id === selectedItemId);
          });
          
          if (accordionsWithoutSelected.length > 0) {
            newExpanded.delete(accordionsWithoutSelected[0]);
          }
        }
        
        // Open the accordion containing the selected item
        newExpanded.add(accordionWithItem.id);
        return newExpanded;
      });
    }
    
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
  className: PropTypes.string,
  style: PropTypes.object,
};

export default AccordionSelectableListContainer; 