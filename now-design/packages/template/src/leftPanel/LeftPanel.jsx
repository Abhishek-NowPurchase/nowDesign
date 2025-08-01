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
 * - width: number|string (optional) - Width of the sidebar (default: auto)
 * - minWidth: number|string (optional) - Minimum width
 * - maxWidth: number|string (optional) - Maximum width
 * - height: number|string (optional) - Height of the sidebar
 * - minHeight: number|string (optional) - Minimum height
 * - maxHeight: number|string (optional) - Maximum height
 * - logoWidth: number (optional) - Width of the logo (default: 64)
 * - logoHeight: number (optional) - Height of the logo (default: 32)
 * - logoComponent: element (optional) - Custom logo component to replace LogoMetalCloud
 * - logoProps: object (optional) - Additional props to pass to logo component
 * - logoPosition: string (optional) - Logo position: 'top', 'bottom', 'left', 'right' (default: 'top')
 * - logoMargin: number|string (optional) - Margin around logo
 * - logoPadding: number|string (optional) - Padding around logo
 * - logoContainerClassName: string (optional) - Additional CSS classes for logo container
 * - logoContainerStyle: object (optional) - Additional inline styles for logo container
 * - contentClassName: string (optional) - Additional CSS classes for content container
 * - contentStyle: object (optional) - Additional inline styles for content container
 * - accordionContainerProps: object (optional) - Props to pass to AccordionSelectableListContainer
 * - backgroundColor: string (optional) - Background color
 * - borderRadius: number|string (optional) - Border radius
 * - border: string (optional) - Border style
 * - boxShadow: string (optional) - Box shadow
 * - padding: number|string (optional) - Padding
 * - margin: number|string (optional) - Margin
 * - flexDirection: string (optional) - Flex direction: 'row', 'column', 'row-reverse', 'column-reverse'
 * - justifyContent: string (optional) - Justify content
 * - alignItems: string (optional) - Align items
 * - gap: number|string (optional) - Gap between elements
 * - isCollapsible: boolean (optional) - Whether sidebar is collapsible (for mobile)
 * - collapsedWidth: number|string (optional) - Width when collapsed
 * - onLogoClick: function (optional) - Callback when logo is clicked
 * - onContainerClick: function (optional) - Callback when container is clicked
 * - isLoading: boolean (optional) - Loading state
 * - isDisabled: boolean (optional) - Disabled state
 * - animationDuration: number (optional) - Animation duration in ms
 * - enableAnimations: boolean (optional) - Whether to enable animations (default: true)
 * - isSticky: boolean (optional) - Whether to make sidebar sticky (default: false)
 * - stickyTop: number|string (optional) - Top position when sticky (default: 0)
 * - stickyZIndex: number (optional) - Z-index when sticky (default: 1000)
 * - shadowStyle: string (optional) - Box shadow style when enabled (default: 'none')
 * - enableShadow: boolean (optional) - Whether to enable shadow (default: false)
 * - className: string (optional) - Additional CSS classes
 * - style: object (optional) - Additional inline styles
 */
const LeftPanel = ({
  accordionData = [],
  onItemSelect,
  onSelectionChange,
  defaultSelectedItemId, // New prop for default selection
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
  logoWidth = 64,
  logoHeight = 32,
  logoComponent,
  logoProps = {},
  logoPosition = 'top',
  logoMargin,
  logoPadding,
  logoContainerClassName = '',
  logoContainerStyle = {},
  contentClassName = '',
  contentStyle = {},
  accordionContainerProps = {},
  backgroundColor,
  borderRadius,
  border,
  padding,
  margin,
  flexDirection = 'column',
  justifyContent,
  alignItems,
  gap,
  isCollapsible = false,
  collapsedWidth,
  onLogoClick,
  onContainerClick,
  isLoading = false,
  isDisabled = false,
  animationDuration = 300,
  enableAnimations = true,
  isSticky = false,
  stickyTop = 0,
  stickyZIndex = 1000,
  shadowStyle = 'none',
  enableShadow = false,
  className = '',
  style = {}
}) => {
  const handleItemSelect = (itemId) => {
    if (onItemSelect && !isDisabled) {
      onItemSelect(itemId);
    }
    
    // Enhanced callback with parent accordion information
    if (onSelectionChange && !isDisabled) {
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
    if (onLogoClick && !isDisabled) {
      onLogoClick(e);
    }
  };

  const handleContainerClick = (e) => {
    if (onContainerClick && !isDisabled) {
      onContainerClick(e);
    }
  };

  // Build container styles
  const containerStyles = {
    width,
    minWidth,
    maxWidth,
    height,
    minHeight,
    maxHeight,
    backgroundColor,
    borderRadius,
    border,
    boxShadow: enableShadow ? shadowStyle : 'none',
    padding,
    margin,
    flexDirection,
    justifyContent,
    alignItems,
    gap,
    transition: enableAnimations ? `all ${animationDuration}ms ease` : 'none',
    // Sticky positioning
    ...(isSticky && {
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: stickyZIndex,
      height: '100vh',
      minHeight: '100vh',
      overflowY: 'auto',
      margin: 0,
      padding: 0,
      boxShadow: enableShadow ? shadowStyle : 'none'
    }),
    ...style
  };

  // Build logo container styles
  const logoContainerStyles = {
    margin: logoMargin,
    padding: logoPadding,
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
      className={`left-panel ${className} ${isLoading ? 'loading' : ''} ${isDisabled ? 'disabled' : ''}`} 
      style={containerStyles}
      onClick={handleContainerClick}
    >
      {/* Logo Section */}
      {logoPosition === 'top' && (
        <div 
          className={`left-panel-logo ${logoContainerClassName}`} 
          style={logoContainerStyles}
          onClick={handleLogoClick}
        >
          <LogoComponent {...finalLogoProps} />
        </div>
      )}

      {/* Content Section */}
      <div className={`left-panel-content ${contentClassName}`} style={contentStyles}>
        <AccordionSelectableListContainer
          accordionData={accordionData}
          onItemSelect={handleItemSelect}
          defaultSelectedItemId={defaultSelectedItemId}
          {...accordionContainerProps}
        />
      </div>

      {/* Logo Section - Bottom */}
      {logoPosition === 'bottom' && (
        <div 
          className={`left-panel-logo ${logoContainerClassName}`} 
          style={logoContainerStyles}
          onClick={handleLogoClick}
        >
          <LogoComponent {...finalLogoProps} />
        </div>
      )}

      {/* Logo Section - Left */}
      {logoPosition === 'left' && (
        <div 
          className={`left-panel-logo ${logoContainerClassName}`} 
          style={logoContainerStyles}
          onClick={handleLogoClick}
        >
          <LogoComponent {...finalLogoProps} />
        </div>
      )}

      {/* Logo Section - Right */}
      {logoPosition === 'right' && (
        <div 
          className={`left-panel-logo ${logoContainerClassName}`} 
          style={logoContainerStyles}
          onClick={handleLogoClick}
        >
          <LogoComponent {...finalLogoProps} />
        </div>
      )}
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
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  minWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  minHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  logoWidth: PropTypes.number,
  logoHeight: PropTypes.number,
  logoComponent: PropTypes.element,
  logoProps: PropTypes.object,
  logoPosition: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  logoMargin: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  logoPadding: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  logoContainerClassName: PropTypes.string,
  logoContainerStyle: PropTypes.object,
  contentClassName: PropTypes.string,
  contentStyle: PropTypes.object,
  accordionContainerProps: PropTypes.object,
  backgroundColor: PropTypes.string,
  borderRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  border: PropTypes.string,
  shadowStyle: PropTypes.string,
  padding: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  flexDirection: PropTypes.oneOf(['row', 'column', 'row-reverse', 'column-reverse']),
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  gap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  isCollapsible: PropTypes.bool,
  collapsedWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onLogoClick: PropTypes.func,
  onContainerClick: PropTypes.func,
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
  animationDuration: PropTypes.number,
  enableAnimations: PropTypes.bool,
  isSticky: PropTypes.bool,
  stickyTop: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  stickyZIndex: PropTypes.number,
  enableShadow: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object
};

export default LeftPanel; 