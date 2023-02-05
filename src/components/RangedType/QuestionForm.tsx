import React, { useState } from 'react';

const QuestionForm: React.FC = () => {
  const [question, setQuestion] = useState<string>('');
  const [options, setOptions] = useState<string[]>([]);

  const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(event.target.value);
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOptions([...options, event.target.value]);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter question"
        value={question}
        onChange={handleQuestionChange}
      />
      <input
        type="text"
        placeholder="Enter option"
        onChange={handleOptionChange}
      />
      <ul>
        {options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionForm;
