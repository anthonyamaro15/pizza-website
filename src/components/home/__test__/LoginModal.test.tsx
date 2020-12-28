import React from 'react';
import { render, screen } from '@testing-library/react';
import LoginModal from '../LoginModal';


const users = [
   {
      id: 1,
      address: "example address",
      first_name: "Lisa",
      last_name: "Smith",
      email: "lisa@gmail.com",
      phone_number: '888888888'
   }
]

describe("Renders LoginModal without crashing", () => {
   it('renders LoginModal', () => {
      const openLoginModal = () => null;
      const closeLoginModal = () => null;
      render(
         <LoginModal 
            open={false} 
            openLoginModal={openLoginModal} 
            closeLoginModal={closeLoginModal} 
            user={[]} 
         />);
   });
   it('renders LoginModal form', () => {
      const openLoginModal = () => null;
      const closeLoginModal = () => null;
      render(
         <LoginModal 
            open={true} 
            openLoginModal={openLoginModal} 
            closeLoginModal={closeLoginModal} 
            user={[]} 
         />);

         expect(screen.getByRole("textbox", {name: /email/i })).toBeInTheDocument();
         expect(screen.getByTestId(/password/i)).toBeInTheDocument();
         expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
         expect(screen.getByText(/forgot your password?/i)).toBeInTheDocument();
         expect(screen.getByRole('button', { name: /create account/i })).toBeInTheDocument();
      });

      it('Renders modal with user information', () => {
      const openLoginModal = () => null;
      const closeLoginModal = () => null;
      render(
         <LoginModal 
            open={true} 
            openLoginModal={openLoginModal} 
            closeLoginModal={closeLoginModal} 
            user={users} 
         />);

         expect(screen.getByRole('heading', { name: /my account/i })).toBeInTheDocument();
         const name = screen.getAllByText(/lisa smith/i);
         expect(name[0]).toBeInTheDocument();
         expect(screen.getByRole('button', { name: /sign out/i })).toBeInTheDocument();
      });
});
