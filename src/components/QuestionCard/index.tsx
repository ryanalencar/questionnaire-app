import React from 'react';

import * as S from './styles';

export function QuestionCard() {
  return (
    <S.CardContainer>
      <S.QuestionSection>
        <S.QuestionCounter>
          Question 1<span>/4</span>
        </S.QuestionCounter>
        <S.QuestionText>What is the capital of France?</S.QuestionText>
      </S.QuestionSection>
      <S.AnswerSection>aaaaaaaa</S.AnswerSection>
    </S.CardContainer>
  );
}
