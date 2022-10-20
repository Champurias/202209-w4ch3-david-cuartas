import { useState } from "react";
import PhoneNumberContext from "./TelephoneContext";

interface TelefphoneContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const PhoneNumberContextProvider = ({
  children,
}: TelefphoneContextProviderProps): JSX.Element => {
  const [telephoneNumber, getTelephoneNumber] = useState("");

  const addNewNumber = (number: string): void => {
    if (telephoneNumber.length < 9) {
      getTelephoneNumber(telephoneNumber + number);
    }
  };

  return (
    <PhoneNumberContext.Provider value={{ telephoneNumber, addNewNumber }}>
      {children}
    </PhoneNumberContext.Provider>
  );
};

export default PhoneNumberContextProvider;
