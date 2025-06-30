import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ 
  children, 
  defaultTheme = 'light',
  themes = ['light', 'dark'],
  enableSystemTheme = true,
  persistTheme = true 
}) => {
  const [theme, setThemeState] = useState(defaultTheme);
  const [systemTheme, setSystemTheme] = useState(null);

  // System theme detection
  useEffect(() => {
    if (enableSystemTheme && typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e) => setSystemTheme(e.matches ? 'dark' : 'light');
      
      setSystemTheme(mediaQuery.matches ? 'dark' : 'light');
      mediaQuery.addEventListener('change', handleChange);
      
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [enableSystemTheme]);

  // Load persisted theme
  useEffect(() => {
    if (persistTheme && typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('now-design-theme');
      if (savedTheme && themes.includes(savedTheme)) {
        setThemeState(savedTheme);
      }
    }
  }, [persistTheme, themes]);

  // Set theme function
  const setTheme = (newTheme) => {
    if (themes.includes(newTheme)) {
      setThemeState(newTheme);
      if (persistTheme && typeof window !== 'undefined') {
        localStorage.setItem('now-design-theme', newTheme);
      }
    }
  };

  // Toggle theme function
  const toggleTheme = () => {
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  const value = {
    theme,
    setTheme,
    toggleTheme,
    systemTheme,
    themes,
    isSystemTheme: theme === systemTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      <div data-theme={theme}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export { ThemeContext }; 