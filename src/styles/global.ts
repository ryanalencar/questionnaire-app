import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 16 * 0.9375 = 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 16 * 0.875 = 14px
    }
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    -webkit-font-smoothing: antialiased;
    transition: background ease 0.3s;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
