import React from 'react';
import { screen, render } from '@testing-library/react'; 
import HomeHeader from '../HomeHeader';


describe("renders HomeHeader without crashing", () => {
   it("Displays Header", () => {
      render(<HomeHeader />);
   });

   it("Displays Header text", () => {
      render(<HomeHeader />);

      expect(screen.getByRole('heading', { name: /chicago deep dish/i })).toBeInTheDocument();

      expect(screen.getByRole("button", { name: /start my order now!/i })).toBeInTheDocument();
   })
})
