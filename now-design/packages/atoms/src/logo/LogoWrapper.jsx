import React from 'react';
import PropTypes from 'prop-types';

const LogoWrapper = ({ svg: Svg, color, ...props }) => {
  const style = color ? { color, ...props.style } : props.style;
  return <Svg style={style} {...props} />;
};

LogoWrapper.propTypes = {
  svg: PropTypes.elementType.isRequired,
  color: PropTypes.string,
};

export default LogoWrapper; 