import { createContext } from "react";
interface TelephoneContextStructure {
  telephoneNumber: string;
  addNewNumber: (number: string) => void;
}
const TelephoneContext = createContext<TelephoneContextStructure>(
  {} as TelephoneContextStructure
);
export default TelephoneContext;
