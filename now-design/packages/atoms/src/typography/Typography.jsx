import React from 'react';
import PropTypes from 'prop-types';
// Ensure 'now-design-tokens/dist/css/variables.css' and 'now-design-styles/text/text-styles.css' are imported at the app entry point

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