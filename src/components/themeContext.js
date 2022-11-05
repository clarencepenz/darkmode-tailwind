import React from 'react';

const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const currentTheme = window.localStorage.getItem('current-theme');
    if (typeof currentTheme === 'string') {
      return currentTheme;
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
  }
  return 'light';
};

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ initialTheme, children }) => {
  const [theme, setTheme] = React.useState(getInitialTheme);

  const checkTheme = (mode) => {
    const doc = window.document.documentElement;
    const isDark = mode === 'dark';

    doc.classList.remove(isDark ? 'light' : 'dark');
    doc.classList.add(mode);

    localStorage.setItem('current-theme', mode);
  };

  if (initialTheme) {
    checkTheme(initialTheme);
  }

  React.useEffect(() => {
    checkTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


