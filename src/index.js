import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/reset.scss';
import './styles/typography.scss';
import './assets/fonts/comfortaa/comfortaa.scss';
import './assets/fonts/inter/inter.scss';

import Routes from './routes/routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
);
