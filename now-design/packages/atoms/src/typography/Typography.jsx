import React from 'react';
import PropTypes from 'prop-types';
// Ensure 'now-design-tokens/dist/css/variables.css' and 'now-design-styles/text/text-styles.css' are imported at the app entry point

/**
 * Generic typography atom that renders any HTML tag with design token-driven styling.
 *
 * @param {Object} props
 * @param {React.ElementType} [props.as='span'] HTML tag or React component to render.
 * @param {string} [props.className=''] CSS classes, e.g., 'bold-h5', 'regular-bodyMedium'.
 * @param {string} [props.color='text-primary'] Design token name or raw CSS color (via tokens).
 * @param {'left'|'center'|'right'|'justify'} [props.align='left'] Text alignment.
 * @param {boolean} [props.truncate=false] If true, applies single-line truncation with ellipsis.
 * @param {Object} [props.style={}] Inline style overrides merged with computed styles.
 * @param {React.ReactNode} props.children Content to render inside the tag.
 * @returns {JSX.Element} Text wrapper honoring tokens for color and alignment.
 */
const TypographyAtom = ({
  as: Tag = 'span',
  className = '',
  color = 'text-primary',
  align = 'left',
  truncate = false,
  style = {},
  children,
  ...rest
}) => {
  return (
    <Tag
      className={className}
      style={{
        color: `var(--${color})`,
        textAlign: align,
        whiteSpace: truncate ? 'nowrap' : undefined,
        overflow: truncate ? 'hidden' : undefined,
        textOverflow: truncate ? 'ellipsis' : undefined,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

TypographyAtom.propTypes = {
  as: PropTypes.elementType,
  className: PropTypes.string, // e.g., 'bold-h5', 'regular-bodyMedium', etc.
  color: PropTypes.string, // token name, e.g., 'text-primary'
  align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  truncate: PropTypes.bool,
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
};

export default TypographyAtom; 