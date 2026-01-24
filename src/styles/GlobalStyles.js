import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Playfair Display', serif;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    transition: all 0.3s ease;
    line-height: 1.6;
  }

  h1, h2, h3 {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.md};
    margin-bottom: ${({ theme }) => theme.spacing(2)};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.accent};
    transition: 0.3s;
  }

  a:hover {
    opacity: 0.8;
  }

    @keyframes fadeSlideIn {
    from {
      opacity: 0;
      transform: translateY(8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default GlobalStyle;
