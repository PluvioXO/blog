import React, { createContext, useState, useMemo, useEffect } from 'react';

export const ThemeContext = createContext({
  theme: 'dark', // Default here is less critical now, will be overwritten
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  // Initialize theme from localStorage or default to 'dark'
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    console.log('[ThemeContext] Initializing theme. Read from localStorage:', storedTheme);
    return storedTheme ? storedTheme : 'dark';
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', newTheme); // Save to localStorage
      console.log('[ThemeContext] Theme toggled. prevTheme:', prevTheme, 'newTheme:', newTheme, 'Saved to localStorage.');
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
    [theme, toggleTheme] // Added toggleTheme to dependency array
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}; 