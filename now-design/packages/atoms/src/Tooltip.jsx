import React from 'react';
import PropTypes from 'prop-types';
import './Tooltip.scss';
// Import icons
import SystemInformationLine from '@now-design/icons/src/react/now-design/packages/icons/raw/SystemInformationLine';
import SystemErrorWarningLine from '@now-design/icons/src/react/now-design/packages/icons/raw/SystemErrorWarningLine';
import SystemAlertLine from '@now-design/icons/src/react/now-design/packages/icons/raw/SystemAlertLine';

const ICONS = {
  information: <SystemInformationLine className="nd-tooltip__icon-svg" />,
  error: <SystemErrorWarningLine className="nd-tooltip__icon-svg" />,
  warning: <SystemAlertLine className="nd-tooltip__icon-svg" />,
};

const Tooltip = ({
  variant = 'default',
  children,
  ...props
}) => {
  const hasIcon = variant !== 'default';
  return (
    <div className={`nd-tooltip nd-tooltip--${variant}`} {...props}>
      {hasIcon && (
        <div className={`nd-tooltip__icon nd-tooltip__icon--${variant}`}>{ICONS[variant]}</div>
      )}
      <div className="nd-tooltip__content">{children}</div>
    </div>
  );
};

Tooltip.propTypes = {
  variant: PropTypes.oneOf(['default', 'information', 'error', 'warning']),
  children: PropTypes.node,
};

export default Tooltip; 