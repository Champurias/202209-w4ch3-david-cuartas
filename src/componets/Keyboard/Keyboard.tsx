import Key from "../Key/Key";
import "./Keyboard.css";

const Keyboard = (): JSX.Element => {
  const keyPhoneNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <ol className="keyboard">
      {keyPhoneNumbers.map((number, position) => (
        <li key={`${position}`}>
          <Key text={`${number}`} action={() => {}} />
        </li>
      ))}
      <li>
        <Key text="delete" action={() => {}} />
      </li>
    </ol>
  );
};

export default Keyboard;
