import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '~/App';
import GlobalStyle from '~/components/GlobalStyle/GlobalStyle';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GlobalStyle>
      <App />
    </GlobalStyle>
);
