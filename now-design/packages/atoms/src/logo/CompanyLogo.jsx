import React from 'react';
import PropTypes from 'prop-types';
import NowPurchaseIcon from './nowPurchase-Icon.svg';
import MetalCloudIcon from './metalCloud-Icon.svg';
import NowPurchaseLogo from './nowPurchase-Logo.svg';
import MetalCloudLogo from './metalCloud-Logo.svg';
import CombinedLogo from './nowPurchase-MetalCloud-CombinedLogo.svg';

const logoMap = {
  nowPurchase: NowPurchaseIcon, // static
  metalCloud: MetalCloudIcon,   // static
  nowPurchaseLogo: NowPurchaseLogo, // theme-dependent
  metalCloudLogo: MetalCloudLogo,   // theme-dependent
  combinedLogo: CombinedLogo,       // theme-dependent
};

const themeDependent = ['nowPurchaseLogo', 'metalCloudLogo', 'combinedLogo'];

const CompanyLogo = ({
  variant = 'nowPurchase',
  color,
  width,
  height,
  className,
  style,
  'aria-label': ariaLabel,
  title,
  role = 'img',
  onClick,
  ...props
}) => {
  const LogoSVG = logoMap[variant] || NowPurchaseIcon;
  const isThemeDependent = themeDependent.includes(variant);
  const mergedStyle = {
    ...(isThemeDependent && color ? { color } : {}),
    ...style,
  };
  return (
    <LogoSVG
      width={width}
      height={height}
      className={className}
      style={mergedStyle}
      aria-label={ariaLabel}
      title={title}
      role={role}
      onClick={onClick}
      {...props}
    />
  );
};

CompanyLogo.propTypes = {
  variant: PropTypes.oneOf([
    'nowPurchase',
    'metalCloud',
    'nowPurchaseLogo',
    'metalCloudLogo',
    'combinedLogo',
  ]),
  color: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.object,
  'aria-label': PropTypes.string,
  title: PropTypes.string,
  role: PropTypes.string,
  onClick: PropTypes.func,
};

export default CompanyLogo; 