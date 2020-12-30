import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { screen, render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ResetPassword from '../ResetPassword';
import { resetPassswordRequest } from '../../apiRequest';
import { serverUrl } from '../../../envVariables';

const token = 'tokenvalue';
const response = { message: "Password has been updated successfully" };
const newPassword = { password:'newpassword'};

const server = setupServer(
   rest.patch(`${serverUrl}/api/resetpassword/${token}`, (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(response));
   })
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.restoreHandlers());

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

   it("Checks for success api response", async () => {
      render(
         <Router>
            <ResetPassword />
         </Router>
      ); 

      const { data } = await resetPassswordRequest(newPassword, token);
      expect(data.message).toBe('Password has been updated successfully');
   });

   it("Checks for fail api response", async () => {
      render(
         <Router>
            <ResetPassword />
         </Router>
      ); 
      server.use(
         rest.patch(`${serverUrl}/api/resetpassword/${token}`, (req, res, ctx) => {
            return res(ctx.status(500));
         })
      );
      await expect(resetPassswordRequest(newPassword, token)).rejects.toThrowError("500");
   })
});
