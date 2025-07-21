import React from 'react';
import { ReactComponent as Svg } from './metalCloud-Logo.svg';
import LogoWrapper from './LogoWrapper';

export const LogometalCloudLogo = (props) => (
  <LogoWrapper svg={Svg} {...props} />
); 