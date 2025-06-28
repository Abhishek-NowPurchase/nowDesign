import React from 'react';
import Button from './Button';
import SystemExportLine from '@now-design/icons/src/react/now-design/packages/icons/raw/SystemExportLine';
import fontSizes from '@now-design/tokens/typography/font-sizes.json';
import lineHeights from '@now-design/tokens/typography/line-heights.json';
import spacings from '@now-design/tokens/scale/responsive-spacing.json';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'transparent'],
      defaultValue: 'primary',
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'hover', 'disabled', 'focus', 'error', 'success'],
      defaultValue: 'default',
    },
    iconLeft: { control: false },
    iconRight: { control: false },
    children: { control: 'text', defaultValue: 'Button' },
    disabled: { control: 'boolean', defaultValue: false },
  },
};

const states = ['default', 'hover', 'disabled', 'focus', 'error', 'success'];
const variants = ['primary', 'secondary', 'transparent'];

const icon = <SystemExportLine />;

export const AllVariants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
    {variants.map(variant => (
      <div key={variant} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <div style={{ width: 100, textAlign: 'right', marginRight: 16 }}>{variant}</div>
        {states.map(state => (
          <Button
            key={state}
            variant={variant}
            state={state}
            iconLeft={icon}
            iconRight={icon}
            disabled={state === 'disabled'}
            style={{ margin: 4 }}
          >
            Button
          </Button>
        ))}
      </div>
    ))}
  </div>
);

export const IconOnly = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
    {variants.map(variant => (
      <div key={variant} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <div style={{ width: 100, textAlign: 'right', marginRight: 16 }}>{variant}</div>
        {states.map(state => (
          <Button
            key={state}
            variant={variant}
            state={state}
            iconLeft={icon}
            disabled={state === 'disabled'}
            style={{ margin: 4 }}
          />
        ))}
      </div>
    ))}
  </div>
);

const Template = (args) => <Button {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  children: 'Button',
  variant: 'primary',
  state: 'default',
  iconLeft: icon,
  iconRight: icon,
  disabled: false,
};

export const Responsive = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
    <div>
      <div style={{ marginBottom: 8 }}>Desktop (min-width: 1024px)</div>
      <div style={{ width: 400, border: '1px dashed #ccc', padding: 16 }}>
        <Button
          style={{
            fontSize: fontSizes['font-size'].bodyLarge.desktop + 'px',
            lineHeight: lineHeights['line-height'].bodyLarge.desktop + 'px',
            padding: spacings.gapSpacing['400'].desktop || '12px 24px',
          }}
        >
          Button
        </Button>
      </div>
    </div>
    <div>
      <div style={{ marginBottom: 8 }}>Tablet (min-width: 768px)</div>
      <div style={{ width: 300, border: '1px dashed #ccc', padding: 16 }}>
        <Button
          style={{
            fontSize: fontSizes['font-size'].bodyLarge.tablet + 'px',
            lineHeight: lineHeights['line-height'].bodyLarge.tablet + 'px',
            padding: spacings.gapSpacing['400'].tablet || spacings.gapSpacing['400'].desktop,
          }}
        >
          Button
        </Button>
      </div>
    </div>
    <div>
      <div style={{ marginBottom: 8 }}>Mobile (max-width: 480px)</div>
      <div style={{ width: 200, border: '1px dashed #ccc', padding: 16 }}>
        <Button
          style={{
            fontSize:
              (fontSizes['font-size'].bodyLarge.mobile || fontSizes['font-size'].bodyLarge.tablet || fontSizes['font-size'].bodyLarge.desktop) + 'px',
            lineHeight:
              (lineHeights['line-height'].bodyLarge.mobile || lineHeights['line-height'].bodyLarge.tablet || lineHeights['line-height'].bodyLarge.desktop) + 'px',
            padding:
              spacings.gapSpacing['400'].mobile ||
              spacings.gapSpacing['400'].tablet ||
              spacings.gapSpacing['400'].desktop,
          }}
        >
          Button
        </Button>
      </div>
    </div>
  </div>
); 