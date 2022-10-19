import { createContext } from "react";
interface TelephoneContextStructure {
  telephoneNumber: number[];
  isCalling: boolean;
  addNumber: (newNumber: number) => void;
  deleteNumber: () => void;
}
const TelephoneContext = createContext<TelephoneContextStructure>(
  {} as TelephoneContextStructure
);
export default TelephoneContextStructure;
