import React, { useState } from "react";
import './InputType.css';

export default function InputType() {
  const [inputValue, setInputValue] = useState('');
  const [showInputValue, setShowInputValue] = useState(false);

  const handleButtonClick = () => {
    setShowInputValue(true);
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  return (
    <div>
      <input onChange={handleInputChange} />
      <button onClick={handleButtonClick}>
        Print Input
      </button>
      {showInputValue && <p>{inputValue}</p>}
    </div>
  );
}
