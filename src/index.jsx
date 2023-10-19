import React from 'react';
import { createRoot } from 'react-dom/client';
import { init } from '@noriginmedia/norigin-spatial-navigation';
import App from './App';
import './styles/globalStyles.scss';

init({
  debug: false,
  visualDebug: false
});

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
