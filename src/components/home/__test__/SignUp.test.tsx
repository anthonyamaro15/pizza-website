import React from 'react';
import { render, screen } from '@testing-library/react';
import SignUp from '../SignUp';

describe("Renders Signup component without crashing", () => {
   it('renders component', () => {
      const openLoginModal = () => null;
      render(
         <SignUp openLoginModal={openLoginModal} />
      )
   });

   it('renders sign up form and its inputs', () => {
      const openLoginModal = () => null;
      render(
         <SignUp openLoginModal={openLoginModal} />
      );

      expect(screen.getByRole("heading", { name: /create an account/i })).toBeInTheDocument();
      expect(screen.getByRole('textbox', { name: /first name/i })).toBeInTheDocument();
      expect(screen.getByRole('textbox', { name: /last name/i })).toBeInTheDocument();
      expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument();
      expect(screen.getByPlaceholderText('847-123-45-67')).toBeInTheDocument();
      expect(screen.getByRole('textbox', { name: /address/i })).toBeInTheDocument();
      expect(screen.getByTestId(/signup_password/i)).toBeInTheDocument();
      expect(screen.getByTestId(/pass_comfirmation/i)).toBeInTheDocument();
      expect(screen.getByTestId(/signup_password/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()   
   });
})
