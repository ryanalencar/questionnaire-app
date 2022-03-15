import styled from 'styled-components';

export const ContentTitle = styled.h1`
  color: ${({ theme }) =>
    theme.title === 'light'
      ? theme.colors.secondary800
      : theme.colors.primary500};
`;

export const Content = styled.div`
  box-sizing: border-box;
  display: block;
  padding: 0 1rem;
  margin: 0;
  width: 100%;
  height: 100vh;
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column;
    ${ContentTitle} {
      margin-bottom: 1rem;
    }
  }
`;
