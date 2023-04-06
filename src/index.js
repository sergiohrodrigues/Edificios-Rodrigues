import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes';
import { createGlobalStyle } from 'styled-components';

export const GlobalStye = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
  }
  
  body {
    background: linear-gradient(rgb(173, 173, 173), gray);
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }  
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <GlobalStye />
        <App />
    </>
);