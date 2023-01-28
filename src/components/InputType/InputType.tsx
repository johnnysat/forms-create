import React, { useState } from "react";
import './InputType.css';

interface Props { }

export const InputType: React.FC<Props> = () => {
  const [inputValue, setInputValue] = useState('');
  const [showInputValue, setShowInputValue] = useState<string[]>([]);

  const handleButtonClick = (): void => {
    setShowInputValue([...showInputValue, inputValue]);
    setInputValue('');
  }

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleButtonClick();
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  return (
    <div>
      <input value={inputValue} onChange={handleInputChange} onKeyDown={handleInputKeyDown} />
      <button onClick={handleButtonClick}>
        Adicionar Pergunta
      </button>
      {showInputValue.map((value, index) => (
        <p key={index}>{value}</p>
      ))}
    </div>
  );

}
