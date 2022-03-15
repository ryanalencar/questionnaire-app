import styled from 'styled-components';

export const Button = styled.button`
  position: fixed;
  top: 0;
  right: 0;

  background: ${({ theme }) => theme.colors.primary};
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
`;
