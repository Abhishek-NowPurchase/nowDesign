import React from 'react';
import PropTypes from 'prop-types';
import { AccordionSelectableListContainer } from '../AccordionSelectableListContainer';
import { LogoMetalCloud } from 'now-design-atoms';
import './LeftPanel.css';

/**
 * LeftPanel Template Component
 * A reusable left panel navigation template using AccordionSelectableListContainer
 * 
 * Props:
 * - accordionData: array (required) - Array of accordion configurations
 * - onItemSelect: function (optional) - Enhanced callback when any item is selected
 *   Receives: (itemId, parentAccordionId, selectedItemLabel)
 * - defaultSelectedItemId: string (optional) - Default selected item ID
 * - logo: element (optional) - Custom logo component to replace LogoMetalCloud
 * - logoSize: object (optional) - Logo dimensions {width, height} (default: {width: 64, height: 32})
 * - onLogoClick: function (optional) - Callback when logo is clicked
 * - contentClassName: string (optional) - Additional CSS classes for content container
 * - contentStyle: object (optional) - Additional inline styles for content container
 * - className: string (optional) - Additional CSS classes
 * - style: object (optional) - Additional inline styles (includes layout, visual, and positioning styles)
 */
const LeftPanel = ({
  accordionData = [],
  onItemSelect,
  defaultSelectedItemId,
  logo,
  logoSize = { width: 64, height: 32 },
  onLogoClick,
  contentClassName = '',
  contentStyle = {},
  className = '',
  style = {}
}) => {
  // Warning for missing or empty accordionData
  if (!accordionData || accordionData.length === 0) {
    console.warn('LeftPanel: accordionData is empty or missing. Component may not render properly.');
  }

  const handleItemSelect = (itemId) => {
    if (onItemSelect) {
      // Find the parent accordion for this item
      const parentAccordion = accordionData.find(accordion => 
        accordion.items.some(item => item.id === itemId)
      );
      
      // Find the selected item details
      const selectedItem = parentAccordion?.items.find(item => item.id === itemId);
      
      // Enhanced callback with essential data only
      onItemSelect(
        itemId,
        parentAccordion?.id || null,
        selectedItem?.label || null
      );
    }
  };

  const handleLogoClick = (e) => {
    if (onLogoClick) {
      onLogoClick(e);
    }
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
        className="left-panel-logo"
        style={{ cursor: onLogoClick ? 'pointer' : 'default' }}
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
  defaultSelectedItemId: PropTypes.string,
  logo: PropTypes.element,
  logoSize: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number
  }),
  onLogoClick: PropTypes.func,
  contentClassName: PropTypes.string,
  contentStyle: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object
};

export default LeftPanel; 