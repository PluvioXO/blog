import React, { createContext, useState, useMemo, useEffect } from 'react';
import { THEMES, STORAGE_KEYS } from './constants';

export const ThemeContext = createContext({
  theme: THEMES.DARK,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  // Initialize theme from localStorage or default to dark
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem(STORAGE_KEYS.THEME);
    return storedTheme || THEMES.DARK;
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
      localStorage.setItem(STORAGE_KEYS.THEME, newTheme);
      return newTheme;
    });
  };

  // Apply the theme class to the body element
  useEffect(() => {
    document.body.className = theme + '-mode';
  }, [theme]);

  const contextValue = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}; 