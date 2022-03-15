import React, { useCallback, useState } from 'react';

import { ThemeProvider } from 'styled-components';

import { AnswerCard } from './components/AnswerCard';
import { SwitchThemeButton } from './components/SwitchThemeButton';
import { GlobalStyle } from './styles/global';
import dark from './styles/themes/dark';
import light from './styles/themes/light';

function App() {
  const [theme, setTheme] = useState(dark);

  const toggleTheme = useCallback(() => {
    setTheme((_theme) => (_theme.title === 'light' ? dark : light));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <AnswerCard />
      <SwitchThemeButton toggleTheme={toggleTheme} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
