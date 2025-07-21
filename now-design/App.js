import React from 'react';
import { SystemAddFill, WeatherSunFill, WeatherSunLine } from 'now-design-icons';
import 'now-design-tokens/dist/css/variables.css';
import 'now-design-styles/text/text-styles.css';
import 'now-design-styles/fonts/fonts.css';
import { ThemeProvider, useTheme } from 'now-design-theme';
import { AccordionTrigger, SelectableListItem, Typography, Icon } from 'now-design-atoms';

function ThemedCard() {
  return (
    <div
      style={{
        background: 'var(--normal-surface-page, #fff)',
        color: 'var(--color-brand-on-background, #222)',
        border: '2px solid var(--color-brand-primary, #0052cc)',
        borderRadius: '12px',
        padding: '2rem',
        margin: '2rem auto',
        maxWidth: 400,
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        transition: 'background 0.3s, color 0.3s',
        fontFamily: "'Oxanium', 'Urbanist', Arial, sans-serif"
      }}
    >
      <Typography className="bold-h4" style={{ color: 'var(--normal-typography-bodyPrimary, #0052cc)', marginBottom: 12 }}>
        Themed Card
      </Typography>
      <Typography className="regular-bodyLarge" style={{ color: 'var(--normal-typography-bodySecondary, #444)', fontSize: 18, marginBottom: 8 }}>
        <span style={{ color: 'var(--normal-typography-hover, #ff9800)' }}>
          This card background and text color change with the theme.<br />
        </span>
        <span style={{ color: 'var(--normal-typography-onSuccess, #43a047)' }}>
          Accent color text
        </span>
      </Typography>
    </div>
  );
}

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      style={{
        margin: '1rem',
        padding: '0.5rem 1.5rem',
        borderRadius: 8,
        border: 'none',
        background: 'var(--color-brand-primary, #0052cc)',
        color: 'var(--color-brand-on-primary, #fff)',
        fontWeight: 600,
        cursor: 'pointer',
        fontSize: 18,
        fontFamily: "'Urbanist', Arial, sans-serif",
        boxShadow: '0 1px 4px rgba(0,0,0,0.08)'
      }}
    >
      Switch to {theme === 'light' ? 'Dark' : 'Light'} mode
    </button>
  );
}

function App() {
  const [accordionOpen, setAccordionOpen] = React.useState(false);
  const [selected, setSelected] = React.useState('profile');
  return (
    <ThemeProvider defaultTheme="light">
      <div
        style={{
          minHeight: '100vh',
          background: 'var(--color-brand-background, #fff)',
          transition: 'background 0.3s',
          fontFamily: "'Oxanium', 'Urbanist', Arial, sans-serif"
        }}
      >
        <ThemeToggle />
        <ThemedCard />
        <div style={{ maxWidth: 400, margin: '2rem auto' }}>
          <AccordionTrigger
            label="Account"
            expanded={accordionOpen}
            onToggle={() => setAccordionOpen((open) => !open)}
            icon="SystemAddFill"
          />
          {accordionOpen && (
            <div style={{ border: '1px solid var(--color-brand-primary, #0052cc)', borderRadius: 8, marginTop: 8 }}>
              <SelectableListItem
                icon="User"
                label="Profile"
                selected={selected === 'profile'}
                onSelect={() => setSelected('profile')}
              />
              <SelectableListItem
                icon="WeatherSunFill"
                label="Weather"
                selected={selected === 'weather'}
                onSelect={() => setSelected('weather')}
              />
            </div>
          )}
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 32,
          margin: '2rem 0'
        }}>
          <Icon icon="SystemAddFill" size={64} style={{ color: 'var(--color-brand-primary, #0052cc)' }} />
          <Icon icon="WeatherSunFill" size={64} style={{ color: 'var(--color-brand-warning, #ff9800)' }} />
          <Icon icon="WeatherSunLine" size={64} style={{ color: 'var(--color-brand-success, #43a047)' }} />
        </div>
        <Typography className="regular-bodyLarge" style={{ textAlign: 'center', fontSize: 20, color: 'var(--normal-typography-bodyPrimary, #0052cc)', marginTop: 24 }}>
          This text uses <b>now-design-tokens</b> for color, font, and spacing!
        </Typography>
        <Typography className="regular-bodyLarge" style={{ fontSize: 22, fontWeight: 400, color: 'var(--normal-typography-bodyPrimary, #222)', margin: '2rem auto', textAlign: 'center' }}>
          Body text styled with tokens and Typography atom
        </Typography>
        <Typography className="bold-h1" style={{ fontSize: 36, color: 'var(--color-brand-primary, #0052cc)', textAlign: 'center' }}>
          Main heading
        </Typography>
      </div>
    </ThemeProvider>
  );
}

export default App; 