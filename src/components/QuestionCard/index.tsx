import React, { useEffect, useState } from 'react';

import { Questions } from '../../App';
import { api } from '../../services/api';
import * as S from './styles';

export function QuestionCard() {
  const [questions, setQuestions] = useState<Questions[]>([]);
  const [currentQuestion, setcurrentQuestion] = useState(2);

  useEffect(() => {
    api.get('/questions').then((response) => {
      setQuestions(response.data.questions);
    });
  }, []);

  return (
    <S.CardContainer>
      <S.QuestionSection>
        <S.QuestionCounter>
          Question {currentQuestion + 1}
          <span>/{questions.length}</span>
        </S.QuestionCounter>
        <S.QuestionText>
          {questions[currentQuestion]?.questionText}
        </S.QuestionText>
      </S.QuestionSection>
      <S.AnswerSection>
        {questions[currentQuestion]?.answerType === 'text' && (
          <input type="text" />
        )}
        {questions[currentQuestion]?.answerType === 'multiple' && (
          <div>
            {questions[currentQuestion].anwserOptions?.map((option) => (
              <p key={option.answerText}>{option.answerText}</p>
            ))}
          </div>
        )}
        {questions[currentQuestion]?.answerType === 'objective' && (
          <div>
            {questions[currentQuestion].anwserOptions?.map((option) => (
              <p key={option.answerText}>{option.answerText}</p>
            ))}
          </div>
        )}
      </S.AnswerSection>
    </S.CardContainer>
  );
}
