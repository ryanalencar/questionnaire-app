/* eslint-disable @typescript-eslint/indent */
import { transparentize } from 'polished';
import styled from 'styled-components';

export const Input = styled.input<{ hasError?: boolean }>`
  width: 100%;
  margin-bottom: 15px;
  padding: 12px 16px;
  outline: none;
  border: 2px solid
    ${({ theme, hasError }) => (hasError ? theme.colors.error : 'transparent')};
  border-radius: 4px;
  color: #fff;
  transition: border 0.3s ease;
  background-color: ${({ theme }) =>
    transparentize(0.3, theme.colors.primary400)};
  font-weight: bold;

  &:focus {
    border-color: ${({ theme }) =>
      theme.title === 'light'
        ? theme.colors.primary500
        : theme.colors.secondary300};
  }

  &:disabled {
    opacity: 0.5;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const InputLabel = styled.label`
  color: ${({ theme }) =>
    theme.title === 'light' ? theme.colors.primary400 : theme.colors.text};
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.error};
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    align-items: center;

    margin-bottom: 16px;

    font-size: 16px;
  }

  input[type='checkbox'] {
    appearance: none;
    background-color: #fff;
    margin: 0;
    font: inherit;
    color: #333;
    width: 1.15em;
    height: 1.15em;
    border: 0.15em solid #333;
    border-radius: 0.15em;
    transform: translateY(-0.075em);

    display: grid;
    place-content: center;
    margin-right: 1rem;
  }

  input[type='checkbox']::before {
    content: '';
    width: 0.65em;
    height: 0.65em;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em ${({ theme }) => theme.colors.primary400};
  }

  input[type='checkbox']:checked::before {
    transform: scale(1);
  }
`;
