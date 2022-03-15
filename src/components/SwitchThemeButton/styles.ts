import styled from 'styled-components';

export const Button = styled.button`
  position: fixed;
  top: 0;
  right: 0;

  background: ${({ theme }) =>
    theme.title === 'light'
      ? theme.colors.secondary300
      : theme.colors.secondary800};
  border-radius: 50%;
  outline: 0;
  border: 0;
  width: 50px;
  height: 50px;

  margin-top: 2rem;
  margin-right: 5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.4s;

  svg {
    transition: all 0.3s;
  }
  &:hover {
    svg {
      transform: scale(1.2);
    }
    transform: scale(1.1);
    box-shadow: 0 0 10px
      ${({ theme }) =>
        theme.title === 'light'
          ? 'rgba(0, 0, 0, 0.2)'
          : 'rgba(255, 255, 255, 0.2)'};
  }
`;
