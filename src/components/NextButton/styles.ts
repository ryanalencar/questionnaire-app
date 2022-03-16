import { darken } from 'polished';
import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  height: 2.5rem;
  padding: 0 1.5rem;
  border: 1px solid transparent;
  outline: 0;
  border-radius: 4px;

  font-weight: bold;
  font-size: 0.875rem;
  transition: all 0.3s ease;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.primary300};

  margin-top: 2rem;

  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => darken(0.1, theme.colors.primary300)};
  }
`;
