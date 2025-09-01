import React from 'react';
import Label from './Label';

export default {
  title: 'Atoms/Label',
  component: Label,
};

export const Large = () => <Label size="large">Large Label</Label>;
export const Small = () => <Label size="small">Small Label</Label>;
export const Required = () => <Label size="large" required>Required Field</Label>;
export const WithInfo = () => <Label size="large" info="Helpful info shown in tooltip">Label with Info</Label>;


