import React from 'react';
import { ThemeProvider, useTheme } from '../src';

const ThemeDemo = () => {
  const { theme, toggleTheme, themes } = useTheme();
  
  return (
    <div style={{ 
      padding: '20px', 
      background: 'var(--background)', 
      color: 'var(--text)',
      minHeight: '200px',
      borderRadius: '8px'
    }}>
      <h2 style={{ margin: '0 0 20px 0' }}>Current Theme: {theme}</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={toggleTheme}
          style={{
            background: 'var(--primary)',
            color: 'var(--text-on-primary, white)',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          Toggle Theme
        </button>
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>Available Themes:</h3>
        <ul style={{ margin: '10px 0', paddingLeft: '20px' }}>
          {themes.map(themeName => (
            <li key={themeName} style={{ 
              color: themeName === theme ? 'var(--primary)' : 'var(--text)',
              fontWeight: themeName === theme ? 'bold' : 'normal'
            }}>
              {themeName} {themeName === theme ? '(current)' : ''}
            </li>
          ))}
        </ul>
      </div>
      
      <div style={{ 
        background: 'var(--background-secondary, var(--background))',
        padding: '15px',
        borderRadius: '4px',
        border: '1px solid var(--border)'
      }}>
        <h4 style={{ margin: '0 0 10px 0' }}>Theme Preview</h4>
        <p style={{ margin: '0 0 10px 0' }}>
          This is a preview of how content looks in the {theme} theme.
        </p>
        <button style={{
          background: 'var(--primary)',
          color: 'var(--text-on-primary, white)',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '4px',
          cursor: 'pointer',
          marginRight: '10px'
        }}>
          Primary Button
        </button>
        <button style={{
          background: 'var(--background-secondary, var(--background))',
          color: 'var(--text)',
          border: '1px solid var(--border)',
          padding: '8px 16px',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
          Secondary Button
        </button>
      </div>
    </div>
  );
};

const ThemeToggle = () => {
  const { theme, setTheme, themes } = useTheme();
  
  return (
    <div style={{ 
      padding: '20px', 
      background: 'var(--background)', 
      color: 'var(--text)',
      borderRadius: '8px'
    }}>
      <h3 style={{ margin: '0 0 15px 0' }}>Theme Selector</h3>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {themes.map(themeName => (
          <button
            key={themeName}
            onClick={() => setTheme(themeName)}
            style={{
              background: themeName === theme ? 'var(--primary)' : 'var(--background-secondary, var(--background))',
              color: themeName === theme ? 'var(--text-on-primary, white)' : 'var(--text)',
              border: `1px solid ${themeName === theme ? 'var(--primary)' : 'var(--border)'}`,
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            {themeName}
          </button>
        ))}
      </div>
    </div>
  );
};

export default {
  title: 'Theme/ThemeProvider',
  component: ThemeProvider,
  parameters: {
    docs: {
      description: {
        component: 'ThemeProvider provides theme context and functionality for the Now Design System. It manages theme state, system theme detection, and theme persistence.'
      }
    }
  }
};

export const Default = () => (
  <ThemeProvider defaultTheme="light">
    <ThemeDemo />
  </ThemeProvider>
);

export const DarkTheme = () => (
  <ThemeProvider defaultTheme="dark">
    <ThemeDemo />
  </ThemeProvider>
);

export const ThemeSelector = () => (
  <ThemeProvider defaultTheme="light" themes={['light', 'dark', 'high-contrast']}>
    <ThemeToggle />
  </ThemeProvider>
);

export const SystemThemeDetection = () => (
  <ThemeProvider defaultTheme="light" enableSystemTheme={true}>
    <div style={{ 
      padding: '20px', 
      background: 'var(--background)', 
      color: 'var(--text)',
      borderRadius: '8px'
    }}>
      <h3>System Theme Detection</h3>
      <p>This example automatically detects your system's color scheme preference.</p>
      <ThemeDemo />
    </div>
  </ThemeProvider>
);

export const WithoutPersistence = () => (
  <ThemeProvider defaultTheme="light" persistTheme={false}>
    <div style={{ 
      padding: '20px', 
      background: 'var(--background)', 
      color: 'var(--text)',
      borderRadius: '8px'
    }}>
      <h3>Without Theme Persistence</h3>
      <p>Theme changes won't be saved to localStorage in this example.</p>
      <ThemeDemo />
    </div>
  </ThemeProvider>
); 