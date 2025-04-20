import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    primary: '#333333',
    secondary: '#555555',
    accent: '#C0C0C0',
    highlight: '#888888',
    background: '#FFFFFF',
    backgroundDark: '#1A1A1A',
    text: '#333333',
    textDark: '#F0F0F0',
    border: '#E6E6E6',
    borderDark: '#4C4C4C',
    error: '#FF5555',
    success: '#55AA55',
  },
  fonts: {
    primary: '"Playfair Display", serif',
    secondary: '"Montserrat", sans-serif',
  },
  breakpoints: {
    xs: '480px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    xxl: '1536px',
  },
  transitions: {
    standard: '0.3s ease-in-out',
    slow: '0.5s ease-in-out',
    fast: '0.15s ease-in-out',
  },
  shadows: {
    small: '0 2px 4px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 8px rgba(0, 0, 0, 0.1)',
    large: '0 8px 16px rgba(0, 0, 0, 0.1)',
    card: '0 10px 30px rgba(0, 0, 0, 0.08)',
    highlight: '0 0 15px rgba(192, 192, 192, 0.5)',
  },
};

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: ${props => props.theme.fonts.secondary};
    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.background};
    transition: background-color ${props => props.theme.transitions.standard}, color ${props => props.theme.transitions.standard};
  }

  body.dark {
    color: ${props => props.theme.colors.textDark};
    background-color: ${props => props.theme.colors.backgroundDark};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.primary};
    margin-top: 0;
  }

  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    transition: color ${props => props.theme.transitions.fast};

    &:hover {
      color: ${props => props.theme.colors.accent};
    }
  }

  button {
    cursor: pointer;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .section {
    padding: 4rem 0;
  }

  .dark {
    color: ${props => props.theme.colors.textDark};
    background-color: ${props => props.theme.colors.backgroundDark};
  }
`;