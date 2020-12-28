import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import App from './App';


test("Renders App component without crashing", () => {
  render(
     <Router>
        <App />
     </Router>
  );
});
