import React, { useEffect, useRef, useState } from 'react';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { Questions } from '../../App';
import { api } from '../../services/api';
import Input from '../Input';
import { NextButton } from '../NextButton';
import * as S from './styles';

export function QuestionCard() {
  const [questions, setQuestions] = useState<Questions[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isSummaryShown, setIsSummaryShown] = useState(false);
  const formRef = useRef<FormHandles>(null);

  useEffect(() => {
    api.get('/questions').then((response) => {
      setQuestions(response.data.questions);
    });
  }, []);

  const handleNextQuestion = (data: any) => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((curr) => curr + 1);
    } else setIsSummaryShown(true);
  };

  return (
    <S.CardContainer>
      {isSummaryShown ? (
        <h1>Answeres</h1>
      ) : (
        <Form ref={formRef} onSubmit={handleNextQuestion}>
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
              <Input
                label={questions[currentQuestion].answerHint!}
                name={questions[currentQuestion]?.questionKey}
              />
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
            <NextButton type="submit" title="Next Question" />
          </S.AnswerSection>
        </Form>
      )}
    </S.CardContainer>
  );
}
