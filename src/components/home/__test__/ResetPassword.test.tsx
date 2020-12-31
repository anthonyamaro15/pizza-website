import React from 'react';
import { screen, render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ResetPassword from '../ResetPassword';

describe("Renders Resetpassword without crashing", () => {
   it("renders component", () => {
      render(
         <Router>
            <ResetPassword />
         </Router>
      );
   });

   it('displays form text', () => {
      render(
         <Router>
            <ResetPassword />
         </Router>
      );
      
      const password = screen.getByTestId( /reset_password/i );
      const confirmPassword = screen.getByTestId(/confirm_password/i);
      expect(screen.getByRole('heading', { name: /enter new password/i })).toBeInTheDocument();
      expect(password).toBeInTheDocument();
      expect(confirmPassword).toBeInTheDocument();  
   });
});
