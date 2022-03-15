import React, { useCallback, useState } from 'react';

import { createServer, Model } from 'miragejs';
import { ThemeProvider } from 'styled-components';

import { Content, ContentTitle } from './components/common/Content';
import { QuestionCard } from './components/QuestionCard';
import { SwitchThemeButton } from './components/SwitchThemeButton';
import { GlobalStyle } from './styles/global';
import dark from './styles/themes/dark';
import light from './styles/themes/light';

const questions = [
  {
    questionText: 'What is the capital of France?',
    answerOptions: [
      { answerText: 'New York', isCorrect: false },
      { answerText: 'London', isCorrect: false },
      { answerText: 'Paris', isCorrect: true },
      { answerText: 'Dublin', isCorrect: false },
    ],
  },
  {
    questionText: 'Who is CEO of Tesla?',
    answerOptions: [
      { answerText: 'Jeff Bezos', isCorrect: false },
      { answerText: 'Elon Musk', isCorrect: true },
      { answerText: 'Bill Gates', isCorrect: false },
      { answerText: 'Tony Stark', isCorrect: false },
    ],
  },
  {
    questionText: 'The iPhone was created by which company?',
    answerOptions: [
      { answerText: 'Apple', isCorrect: true },
      { answerText: 'Intel', isCorrect: false },
      { answerText: 'Amazon', isCorrect: false },
      { answerText: 'Microsoft', isCorrect: false },
    ],
  },
  {
    questionText: 'How many Harry Potter books are there?',
    answerOptions: [
      { answerText: '1', isCorrect: false },
      { answerText: '4', isCorrect: false },
      { answerText: '6', isCorrect: false },
      { answerText: '7', isCorrect: true },
    ],
  },
];

createServer({
  models: {
    question: Model,
  },
  seeds(server) {
    server.db.loadData({
      questions,
    });
  },
  routes() {
    this.namespace = 'api';
    this.get('/questions', () => this.schema.all('question'));
  },
});

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
