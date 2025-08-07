import React from 'react';
import PropTypes from 'prop-types';
import AccordionSelectableListContainer from '../AccordionSelectableListContainer';
import { LogoMetalCloud } from 'now-design-atoms';
import './LeftPanel.css';

/**
 * LeftPanel Organism Component
 * A reusable left panel navigation organism using AccordionSelectableListContainer
 * 
 * Props:
 * - items: array (required) - Array of accordion configurations
 * - onItemSelect: function (optional) - Enhanced callback when any item is selected
 *   Receives: (itemId, parentAccordionId, selectedItemLabel)
 * - selectedItem: string (optional) - Selected item ID
 * - logo: element|component (optional) - Custom logo component or element to replace LogoMetalCloud
 * - logoSize: object (optional) - Logo dimensions {width, height} (default: {width: 64, height: 32})
 * - onLogoClick: function (optional) - Callback when logo is clicked
 * - contentClassName: string (optional) - Additional CSS classes for content container
 * - contentStyle: object (optional) - Additional inline styles for content container
 * - className: string (optional) - Additional CSS classes
 * - style: object (optional) - Additional inline styles (includes layout, visual, and positioning styles)
 */
const LeftPanel = ({
  items = [],
  onItemSelect,
  selectedItem,
  logo,
  logoSize = { width: 64, height: 32 },
  onLogoClick,
  contentClassName = '',
  contentStyle = {},
  className = '',
  style = {}
}) => {
  // Warning for missing or empty items
  if (!items || items.length === 0) {
    console.warn('LeftPanel: items is empty or missing. Component may not render properly.');
  }

  const handleItemSelect = (itemId) => {
    if (onItemSelect) {
      // Find the parent accordion for this item
      const parentAccordion = items.find(accordion => 
        accordion.items.some(item => item.id === itemId)
      );
      
      // Find the selected item details
      const selectedItemDetails = parentAccordion?.items.find(item => item.id === itemId);
      
      // Enhanced callback with essential data only
      onItemSelect(
        itemId,
        parentAccordion?.id || null,
        selectedItemDetails?.label || null
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

  // Render logo - handle both React elements and components
  const renderLogo = () => {
    if (logo) {
      // If logo is a React element (already rendered), return it as is
      if (React.isValidElement(logo)) {
        return logo;
      }
      // If logo is a component function, render it with props
      if (typeof logo === 'function') {
        const LogoComponent = logo;
        return <LogoComponent {...logoSize} />;
      }
    }
    // Default logo
    return <LogoMetalCloud {...logoSize} />;
  };

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
        {renderLogo()}
      </div>

      {/* Content Section */}
      <div className={`left-panel-content ${contentClassName}`} style={contentStyles}>
        <AccordionSelectableListContainer
          accordionData={items}
          onItemSelect={handleItemSelect}
          defaultSelectedItemId={selectedItem}
        />
      </div>
    </div>
  );
};

LeftPanel.propTypes = {
  items: PropTypes.arrayOf(
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
  selectedItem: PropTypes.string,
  logo: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func
  ]),
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