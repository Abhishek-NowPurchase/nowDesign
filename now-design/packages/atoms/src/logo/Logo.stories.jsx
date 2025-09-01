import React from 'react';
import { LogoNowPurchase, LogoNowPurchaseMetalCloudCombined, LogoMetalCloud } from './index';

export default {
  title: 'Atoms/Logo',
};

export const NowPurchase = () => <LogoNowPurchase width={300} height={100} />;
export const MetalCloud = () => <LogoMetalCloud width={180} height={120} />;
export const Combined = () => <LogoNowPurchaseMetalCloudCombined width={300} height={120} />;


