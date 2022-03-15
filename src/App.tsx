import React, { useCallback, useState } from 'react';

import { ThemeProvider } from 'styled-components';

import { Content, ContentTitle } from './components/common/Content';
import { QuestionCard } from './components/QuestionCard';
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
      <Content>
        <ContentTitle>Simple React Questionnaire</ContentTitle>
        <QuestionCard />
      </Content>
      <SwitchThemeButton toggleTheme={toggleTheme} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
