import React from 'react';
import PropTypes from 'prop-types';
import './Tooltip.scss';
// Import icons
import SystemInformationLine from '@now-design/icons/src/react/now-design/packages/icons/raw/SystemInformationLine';
import SystemErrorWarningLine from '@now-design/icons/src/react/now-design/packages/icons/raw/SystemErrorWarningLine';
import SystemAlertLine from '@now-design/icons/src/react/now-design/packages/icons/raw/SystemAlertLine';
// Import tokens
import colorAlias from '@now-design/tokens/color/alias.json';
import colorBrand from '@now-design/tokens/color/brand.json';
import scaleAlias from '@now-design/tokens/scale/alias.json';
import scale from '@now-design/tokens/scale/scale.json';
import typography from '@now-design/tokens/typography/typography.json';
import fontFamilies from '@now-design/tokens/typography/font-families.json';
import fontWeights from '@now-design/tokens/typography/font-weights.json';
import fontSizes from '@now-design/tokens/typography/font-sizes.json';
// Import mapped tokens
import mappedColors from '@now-design/tokens/color/mapped.json';
import responsiveSpacing from '@now-design/tokens/scale/responsive-spacing.json';

const ICONS = {
  information: <SystemInformationLine className="nd-tooltip__icon-svg" />,
  error: <SystemErrorWarningLine className="nd-tooltip__icon-svg" />,
  warning: <SystemAlertLine className="nd-tooltip__icon-svg" />,
};

// Token-driven values
const getTokenValues = (variant, width) => {
  // Colors from mapped tokens
  const bg = mappedColors.mapped.lightMode.glass.surface.glass.value;
  const text = mappedColors.mapped.lightMode.glass.typography.headingPrimary.value;
  const borderColor = mappedColors.mapped.lightMode.glass.stroke.glassStroke.value;
  const iconColors = {
    information: mappedColors.mapped.lightMode.glass.icons.default.value,
    error: mappedColors.mapped.lightMode.error["600"].value,
    warning: mappedColors.mapped.lightMode.warning["600"].value,
  };
  // Spacing from responsive tokens
  const gap = responsiveSpacing.gapSpacing["200"].desktop.value; // 6px
  const padding = responsiveSpacing.gapSpacing["200"].desktop.value; // 6px
  const borderRadius = scaleAlias.border.cornerRadius.m.value; // 6px
  const borderWidth = scaleAlias.border.strokeWidth.s.value; // 1px
  // Typography
  const fontFamily = fontFamilies["font-family"].body.value;
  const fontWeight = fontWeights["font-weight"].regular.value;
  // Responsive font size: clamp between 12px and 20px, scale with width
  let fontSize = 14;
  if (width) {
    const w = typeof width === 'number' ? width : parseInt(width, 10);
    fontSize = Math.max(12, Math.min(20, Math.round(w / 12)));
  }
  // Effects
  const blur = 16; // from mapped glass/effects/backgroundBlurGlass
  return {
    bg,
    text,
    borderColor,
    iconColor: iconColors[variant] || iconColors.information,
    gap,
    padding,
    borderRadius,
    borderWidth,
    fontFamily,
    fontWeight,
    fontSize,
    blur,
  };
};

function parseSize(size) {
  if (!size) return {};
  if (typeof size === 'number' || typeof size === 'string') {
    return { width: size };
  }
  return size;
}

// Helper to resolve token references to actual values
function resolveToken(token, ...tokenFiles) {
  if (typeof token !== 'string') return token;
  if (!token.startsWith('{')) return token;
  // Remove { and }
  const path = token.replace(/[{}]/g, '').replace('.value', '').split('.');
  for (const file of tokenFiles) {
    let ref = file;
    for (const key of path) {
      if (ref && typeof ref === 'object' && key in ref) {
        ref = ref[key];
      } else {
        ref = null;
        break;
      }
    }
    if (typeof ref === 'string' || typeof ref === 'number') return ref;
    if (ref && typeof ref.value !== 'undefined') return ref.value;
  }
  return token;
}

const Tooltip = ({
  variant = 'information',
  children,
  size,
  ...props
}) => {
  // Size logic: if number or string, use for width/icon; if object, use width/maxWidth for content and icon
  let width = 200;
  let iconSize = 32;
  let contentSize = {};
  if (typeof size === 'number' || typeof size === 'string') {
    width = parseInt(size, 10) || 200;
    iconSize = Math.max(20, Math.round(width / 6));
    contentSize = { width };
  } else if (typeof size === 'object' && size !== null) {
    width = parseInt(size.width, 10) || 200;
    iconSize = Math.max(20, Math.round(width / 6));
    contentSize = { ...size };
  }
  
  // Font size scales with width - start with default 14px, scale with width
  const defaultFontSize = 14;
  const fontSize = Math.max(12, Math.min(24, Math.round(defaultFontSize + (width - 200) / 20)));

  // Colors: resolve mapped tokens to actual values
  const mapped = mappedColors.mapped.lightMode.glass;
  const bg = resolveToken(mapped.surface.glass.value, mappedColors, colorAlias, colorBrand);
  const borderColor = resolveToken(mapped.stroke.glassStroke.value, mappedColors, colorAlias, colorBrand);
  const textColor = resolveToken(mapped.typography.headingPrimary.value, mappedColors, colorAlias, colorBrand);
  const iconColors = {
    information: resolveToken(mapped.icons.default.value, mappedColors, colorAlias, colorBrand),
    error: resolveToken(mappedColors.mapped.lightMode.error["600"].value, mappedColors, colorAlias, colorBrand),
    warning: resolveToken(mappedColors.mapped.lightMode.warning["600"].value, mappedColors, colorAlias, colorBrand),
  };
  const iconColor = iconColors[variant] || iconColors.information;

  // Spacing
  const gap = resolveToken(responsiveSpacing.gapSpacing["200"].desktop.value, responsiveSpacing, scale) || 6;
  const padding = gap;
  const borderRadius = resolveToken(scaleAlias.border.cornerRadius.m.value, scaleAlias, scale) || 6;
  const borderWidth = resolveToken(scaleAlias.border.strokeWidth.s.value, scaleAlias, scale) || 1;
  const fontFamily = fontFamilies["font-family"].body.value;
  const fontWeight = fontWeights["font-weight"].regular.value;
  const blur = 16;
  const hasIcon = variant !== 'default';

  return (
    <div
      className={`nd-tooltip nd-tooltip--${variant}`}
      style={{
        display: 'inline-flex',
        flexDirection: 'column', // vertical layout
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        gap,
        ...contentSize,
        background: bg,
        border: `${borderWidth}px solid ${borderColor}`,
        borderRadius,
        padding,
        fontFamily,
        fontWeight,
        fontSize, // Use calculated fontSize, not iconSize
        color: textColor,
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
        position: 'relative',
        zIndex: 1,
      }}
      {...props}
    >
      {hasIcon && (
        <div
          className={`nd-tooltip__icon nd-tooltip__icon--${variant}`}
          style={{
            color: iconColor,
            width: iconSize,
            height: iconSize,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          {React.cloneElement(ICONS[variant], { width: iconSize, height: iconSize })}
        </div>
      )}
      <div
        className="nd-tooltip__content"
        style={{
          width: '100%',
          textAlign: 'left',
          marginTop: hasIcon ? gap : 0,
        }}
      >
        {children}
      </div>
    </div>
  );
};

Tooltip.propTypes = {
  variant: PropTypes.oneOf(['default', 'information', 'error', 'warning']),
  children: PropTypes.node,
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.shape({
      width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    })
  ]),
};

export default Tooltip; 