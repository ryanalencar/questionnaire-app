/* eslint-disable @typescript-eslint/indent */
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
  background-color: ${({ theme }) => theme.colors.primary400};

  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary300};
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
