import React from 'react';

import { createServer, Model } from 'miragejs';
import { ThemeProvider } from 'styled-components';

import { Content, ContentTitle } from './components/common/Content';
import { QuestionCard } from './components/QuestionCard';
import { SwitchThemeButton } from './components/SwitchThemeButton';
import { useLocalStorage } from './hooks/useLocalStorage';
import { GlobalStyle } from './styles/global';
import dark from './styles/themes/dark';
import light from './styles/themes/light';

export interface Questions {
  questionKey: string;
  questionText: string;
  answerType: 'text' | 'objective' | 'multiple';
  anwserOptions?: {
    answerText: string;
    value: string;
  }[];
  answerHint?: string;
}

const questions: Questions[] = [
  {
    questionKey: 'name',
    questionText: 'What is your name?',
    answerHint: 'Type your name',
    answerType: 'text',
  },
  {
    questionKey: 'age',
    questionText: 'How old are you?',
    answerType: 'objective',
    anwserOptions: [
      {
        answerText: '-18',
        value: 'Less than 18 years',
      },
      {
        answerText: '18 - 29',
        value: 'Between 18 and 29 years',
      },
      {
        answerText: '29 - 40',
        value: 'Between 29 and 40 years',
      },
      {
        answerText: '40 - 70',
        value: 'Between 40 and 70 years',
      },
    ],
  },
  {
    questionKey: 'technologies',
    questionText: 'What technologies you prefer to use?',
    answerType: 'multiple',
    anwserOptions: [
      {
        answerText: 'ReactJs',
        value: 'ReactJs',
      },
      {
        answerText: 'NodeJs',
        value: 'NodeJs',
      },
      {
        answerText: 'React Native',
        value: 'React Native',
      },
      {
        answerText: 'Typescript',
        value: 'Typescript',
      },
      {
        answerText: 'Javascript',
        value: 'Javascript',
      },
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
  const [theme, setTheme] = useLocalStorage('theme', light);

  const toggleTheme = () => {
    setTheme((_theme) => (_theme.title === 'light' ? dark : light));
  };

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
