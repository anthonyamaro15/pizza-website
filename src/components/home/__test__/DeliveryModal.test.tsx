import React from 'react';
import { render, screen } from '@testing-library/react';
import DeliveryModal from '../DeliveryModal';

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

describe("Renders DeliveryModal without crashing", () => {
   it("renders delivery component", () => {
      const openDeliveryModal = () => null;
      const closeDeliveryModal = () => null;
      render(
      <DeliveryModal 
         user={[]}
         openDeliveryModal={openDeliveryModal}
         closeDeliveryModal={closeDeliveryModal}
         open={false}
      />);
   });

   it("Displays user address when user is logged in", () => {
      const openDeliveryModal = () => null;
      const closeDeliveryModal = () => null;
      render(
      <DeliveryModal 
         user={users}
         openDeliveryModal={openDeliveryModal}
         closeDeliveryModal={closeDeliveryModal}
         open={true}
      />);

      expect(screen.getByText( /example address/i)).toBeInTheDocument();
   });

   it("display no address text when user is not logged in", () => {
      const openDeliveryModal = () => null;
      const closeDeliveryModal = () => null;
      render(
      <DeliveryModal 
         user={[]}
         openDeliveryModal={openDeliveryModal}
         closeDeliveryModal={closeDeliveryModal}
         open={true}
      />); 

      const noAddress = screen.getAllByText(/no address/i);

      expect(noAddress[0]).toBeInTheDocument();
   })
})
