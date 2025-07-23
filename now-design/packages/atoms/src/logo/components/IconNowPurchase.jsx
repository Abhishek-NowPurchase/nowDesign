import React from 'react';
import PropTypes from 'prop-types';

export const IconNowPurchase = ({
  width,
  height,
  className,
  style,
  'aria-label': ariaLabel,
  title,
  role = 'img',
  onClick,
}) => (
  <svg
    width={width}
    height={height}
    className={className}
    style={style}
    aria-label={ariaLabel}
    role={role}
    onClick={onClick}
    viewBox="0 0 320 320"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {title && <title>{title}</title>}
    <g clipPath="url(#clip0_2110_347)">
      <path d="M74.4938 208.654V121.164L104.057 138.741V226.232L74.4938 208.654Z" fill="#4AC0EE" />
      <path d="M131.622 177.892V144.734L159.587 160.314V193.473L131.622 177.892Z" fill="#4AC0EE" />
      <path d="M131.622 241.812V208.654L159.587 226.232V258.99L131.622 241.812Z" fill="#4AC0EE" />
      <path d="M188.754 145.132L159.591 160.313V193.471L188.754 178.29V145.132Z" fill="#3F96D2" />
      <path
        d="M159.591 259.788V225.831L215.92 191.873V127.954L245.083 109.976V208.253L159.591 259.788Z"
        fill="#3F96D2"
      />
      <path
        d="M159.588 60.0332L90.4753 101.581L119.239 119.159L159.588 94.7895L215.918 127.948L245.081 109.97L159.588 60.0332Z"
        fill="#2078BD"
      />
      <path d="M159.588 129.546L131.624 144.727L159.588 160.707L188.752 145.126L159.588 129.546Z" fill="#2078BD" />
    </g>
    <defs>
      <clipPath id="clip0_2110_347">
        <rect width="200" height="200" fill="white" transform="translate(60 60.0332)" />
      </clipPath>
    </defs>
  </svg>
);

IconNowPurchase.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.object,
  'aria-label': PropTypes.string,
  title: PropTypes.string,
  role: PropTypes.string,
  onClick: PropTypes.func,
};

IconNowPurchase.defaultProps = {
  width: '320',
  height: '320',
  className: '',
  style: {},
  'aria-label': 'NowPurchase Icon',
  title: 'NowPurchase Icon',
  role: 'img',
  onClick: () => {},
}; 