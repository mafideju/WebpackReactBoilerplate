import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppContainer } from 'react-hot-loader';

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.querySelector('[data-js="app"]')
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.querySelector('[data-js="app"]'));
  })
}

// ReactDOM.render(<App />, document.querySelector('[data-js="app"]'));