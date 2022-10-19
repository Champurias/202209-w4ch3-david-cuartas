interface KeyElements {
  text: string;
  action: () => void;
  className?: string;
}

const Key = ({ text, action, className = "" }: KeyElements): JSX.Element => {
  return (
    <button onClick={action} className={className}>
      {text}
    </button>
  );
};

export default Key;
