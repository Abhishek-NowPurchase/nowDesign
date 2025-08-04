import React from 'react';
import PropTypes from 'prop-types';
import { AccordionSelectableListContainer } from 'now-design-organisms';
import { LogoMetalCloud } from 'now-design-atoms';
import './LeftPanel.css';

/**
 * LeftPanel Template Component
 * A reusable left panel navigation template using AccordionSelectableListContainer
 * 
 * Props:
 * - accordionData: array (required) - Array of accordion configurations
 * - onItemSelect: function (optional) - Global callback when any item is selected
 * - onSelectionChange: function (optional) - Enhanced callback with parent and item info
 * - defaultSelectedItemId: string (optional) - Default selected item ID
 * - logo: element (optional) - Custom logo component to replace LogoMetalCloud
 * - logoSize: object (optional) - Logo dimensions {width, height} (default: {width: 64, height: 32})
 * - onLogoClick: function (optional) - Callback when logo is clicked
 * - logoContainerClassName: string (optional) - Additional CSS classes for logo container
 * - logoContainerStyle: object (optional) - Additional inline styles for logo container
 * - contentClassName: string (optional) - Additional CSS classes for content container
 * - contentStyle: object (optional) - Additional inline styles for content container
 * - className: string (optional) - Additional CSS classes
 * - style: object (optional) - Additional inline styles (includes layout, visual, and positioning styles)
 */
const LeftPanel = ({
  accordionData = [],
  onItemSelect,
  onSelectionChange,
  defaultSelectedItemId,
  logo,
  logoSize = { width: 64, height: 32 },
  onLogoClick,
  logoContainerClassName = '',
  logoContainerStyle = {},
  contentClassName = '',
  contentStyle = {},
  className = '',
  style = {}
}) => {
  const handleItemSelect = (itemId) => {
    if (onItemSelect) {
      onItemSelect(itemId);
    }
    
    // Enhanced callback with parent accordion information
    if (onSelectionChange) {
      // Find the parent accordion for this item
      const parentAccordion = accordionData.find(accordion => 
        accordion.items.some(item => item.id === itemId)
      );
      
      // Find the selected item details
      const selectedItem = parentAccordion?.items.find(item => item.id === itemId);
      
      onSelectionChange({
        itemId,
        parentAccordion: parentAccordion ? {
          id: parentAccordion.id,
          triggerLabel: parentAccordion.triggerLabel,
          triggerIcon: parentAccordion.triggerIcon
        } : null,
        selectedItem: selectedItem ? {
          id: selectedItem.id,
          label: selectedItem.label,
          icon: selectedItem.icon,
          disabled: selectedItem.disabled
        } : null,
        timestamp: new Date().toISOString()
      });
    }
  };

  const handleLogoClick = (e) => {
    if (onLogoClick) {
      onLogoClick(e);
    }
  };

  // Build logo container styles
  const logoContainerStyles = {
    cursor: onLogoClick ? 'pointer' : 'default',
    ...logoContainerStyle
  };

  // Build content styles
  const contentStyles = {
    flex: 1,
    ...contentStyle
  };

  // Determine logo component
  const LogoComponent = logo || LogoMetalCloud;

  return (
    <div 
      className={`left-panel ${className}`} 
      style={style}
    >
      {/* Logo Section */}
      <div 
        className={`left-panel-logo ${logoContainerClassName}`} 
        style={logoContainerStyles}
        onClick={handleLogoClick}
      >
        <LogoComponent {...logoSize} />
      </div>

      {/* Content Section */}
      <div className={`left-panel-content ${contentClassName}`} style={contentStyles}>
        <AccordionSelectableListContainer
          accordionData={accordionData}
          onItemSelect={handleItemSelect}
          defaultSelectedItemId={defaultSelectedItemId}
        />
      </div>
    </div>
  );
};

LeftPanel.propTypes = {
  accordionData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      triggerLabel: PropTypes.string.isRequired,
      triggerIcon: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
      ]),
      items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
          icon: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.element
          ]),
          disabled: PropTypes.bool
        })
      ).isRequired
    })
  ).isRequired,
  onItemSelect: PropTypes.func,
  onSelectionChange: PropTypes.func,
  defaultSelectedItemId: PropTypes.string,
  logo: PropTypes.element,
  logoSize: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number
  }),
  onLogoClick: PropTypes.func,
  logoContainerClassName: PropTypes.string,
  logoContainerStyle: PropTypes.object,
  contentClassName: PropTypes.string,
  contentStyle: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object
};

export default LeftPanel; 