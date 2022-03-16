import { transparentize } from 'polished';
import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 80%;
  padding: 3rem 0rem;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) =>
    theme.title === 'light'
      ? theme.colors.secondary400
      : theme.colors.primary600};
  border-radius: 4px;
`;

export const QuestionSection = styled.section`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid rgba(255, 255, 255, 0.3);
`;

export const QuestionCounter = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) =>
    theme.title === 'light'
      ? theme.colors.primary500
      : theme.colors.secondary200};

  span {
    font-size: 18px;
  }
`;

export const QuestionText = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 2rem;
  color: ${({ theme }) =>
    theme.title === 'light' ? theme.colors.primary500 : theme.colors.text};

  & + p {
    margin-top: 1.5rem;
  }
`;

export const AnswerSection = styled.section`
  padding: 1rem;
`;

export const SectionSeparator = styled.div`
  position: relative;
  border-right: 1px solid ${({ theme }) => theme.colors.primary400};
`;

export const ObjectiveWrapper = styled.div`
  margin: 1rem 1rem;
  display: grid;
  gap: 0.5rem;
`;

export const ObjectiveAnswerButton = styled.button<{
  isActive: boolean;
  activeColor: string;
}>`
  height: 4rem;
  border: 1px solid
    ${({ theme }) =>
      theme.title === 'light'
        ? theme.colors.secondary900
        : theme.colors.primary300};
  border-radius: 4px;

  font-weight: bold;

  background: ${({ activeColor, isActive }) =>
    isActive && transparentize(0.8, activeColor)};
  color: ${({ isActive }) => (isActive ? '#fff' : '#333')};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) =>
      theme.title === 'light'
        ? theme.colors.primary500
        : theme.colors.primary800};
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const SummaryContainer = styled.div`
  h1 {
    text-align: center;
    color: ${({ theme }) =>
      theme.title === 'light'
        ? theme.colors.primary400
        : theme.colors.secondary200};
    margin-bottom: 2rem;
  }
`;

export const AnswersWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  border: 1px solid white;
`;

export const QuestionnaireData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  div:first-child {
    margin-top: 0.5rem;
  }
`;
