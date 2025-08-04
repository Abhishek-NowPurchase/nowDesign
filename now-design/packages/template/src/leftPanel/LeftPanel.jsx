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
 * - logoWidth: number (optional) - Width of the logo (default: 64)
 * - logoHeight: number (optional) - Height of the logo (default: 32)
 * - logoComponent: element (optional) - Custom logo component to replace LogoMetalCloud
 * - logoProps: object (optional) - Additional props to pass to logo component
 * - onLogoClick: function (optional) - Callback when logo is clicked
 * - logoContainerClassName: string (optional) - Additional CSS classes for logo container
 * - logoContainerStyle: object (optional) - Additional inline styles for logo container
 * - contentClassName: string (optional) - Additional CSS classes for content container
 * - contentStyle: object (optional) - Additional inline styles for content container
 * - accordionContainerProps: object (optional) - Props to pass to AccordionSelectableListContainer
 * - className: string (optional) - Additional CSS classes
 * - style: object (optional) - Additional inline styles (includes layout, visual, and positioning styles)
 */
const LeftPanel = ({
  accordionData = [],
  onItemSelect,
  onSelectionChange,
  defaultSelectedItemId,
  logoWidth = 64,
  logoHeight = 32,
  logoComponent,
  logoProps = {},
  onLogoClick,
  logoContainerClassName = '',
  logoContainerStyle = {},
  contentClassName = '',
  contentStyle = {},
  accordionContainerProps = {},
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
  const LogoComponent = logoComponent || LogoMetalCloud;

  // Build logo props
  const finalLogoProps = {
    width: logoWidth,
    height: logoHeight,
    ...logoProps
  };

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
        <LogoComponent {...finalLogoProps} />
      </div>

      {/* Content Section */}
      <div className={`left-panel-content ${contentClassName}`} style={contentStyles}>
        <AccordionSelectableListContainer
          accordionData={accordionData}
          onItemSelect={handleItemSelect}
          defaultSelectedItemId={defaultSelectedItemId}
          {...accordionContainerProps}
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
  logoWidth: PropTypes.number,
  logoHeight: PropTypes.number,
  logoComponent: PropTypes.element,
  logoProps: PropTypes.object,
  onLogoClick: PropTypes.func,
  logoContainerClassName: PropTypes.string,
  logoContainerStyle: PropTypes.object,
  contentClassName: PropTypes.string,
  contentStyle: PropTypes.object,
  accordionContainerProps: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object
};

export default LeftPanel; 