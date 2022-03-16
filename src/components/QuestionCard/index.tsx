import React, { useEffect, useRef, useState } from 'react';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { Questions } from '../../App';
import { api } from '../../services/api';
import Input from '../Input';
import CheckboxInput from '../Input/CheckboxInput';
import { NextButton } from '../NextButton';
import * as S from './styles';

export function QuestionCard() {
  const [questions, setQuestions] = useState<Questions[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isSummaryShown, setIsSummaryShown] = useState(false);
  const [objectiveSelected, setObjectiveSelected] = useState(null);
  const [questionnaireData, setQuestionnaireData] = useState({});
  const formRef = useRef<FormHandles>(null);
  useEffect(() => {
    api.get('/questions').then((response) => {
      setQuestions(response.data.questions);
    });
  }, []);

  const handleNextQuestion = (_data: any) => {
    const data = {
      ..._data,
      age: objectiveSelected,
    };
    setQuestionnaireData(data);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((curr) => curr + 1);
    } else setIsSummaryShown(true);
  };

  const handleObjectiveSelectionChange = (e: MouseEvent, _value: any) => {
    e.preventDefault();
    setObjectiveSelected(_value);
  };

  return (
    <S.CardContainer>
      {isSummaryShown ? (
        <S.SummaryContainer>
          <h1>Answeres</h1>
          <S.AnswersWrapper>
            <div>
              {questions.map((question) => (
                <div key={question.questionKey}>
                  <S.QuestionText>{question.questionText}</S.QuestionText>
                </div>
              ))}
            </div>
            <S.QuestionnaireData>
              {questions.map((question, index) => (
                <div key={questionnaireData[question.questionKey]}>
                  {questionnaireData[question.questionKey]}
                </div>
              ))}
            </S.QuestionnaireData>
          </S.AnswersWrapper>
        </S.SummaryContainer>
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
              <CheckboxInput
                name={questions[currentQuestion]?.questionKey}
                options={questions[currentQuestion].anwserOptions!}
              />
            )}
            {questions[currentQuestion]?.answerType === 'objective' && (
              <S.ObjectiveWrapper>
                {questions[currentQuestion].anwserOptions?.map((option) => (
                  <S.ObjectiveAnswerButton
                    type="button"
                    onClick={(e) =>
                      handleObjectiveSelectionChange(e, option.value)
                    }
                    isActive={objectiveSelected === option.value}
                    activeColor="#fff"
                    key={option.answerText}>
                    {option.answerText}
                  </S.ObjectiveAnswerButton>
                ))}
              </S.ObjectiveWrapper>
            )}
            <NextButton type="submit" title="Next Question" />
          </S.AnswerSection>
        </Form>
      )}
    </S.CardContainer>
  );
}
