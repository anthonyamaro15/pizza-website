import React from 'react';
import { screen, render } from '@testing-library/react';
import ForgotPassword from '../ForgotPassword';

describe("Renders ForgotPassword without crashing", () => {
   it("renders component", () => {
      render(<ForgotPassword />);
   });

   it("displays form input and button", () => {
      render(<ForgotPassword />);

      expect(screen.getByRole("heading", { name: /password reset/i })).toBeInTheDocument();
      expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument();
      expect(screen.getByRole("button", { name: /reset password/i })).toBeInTheDocument();
   });
});

