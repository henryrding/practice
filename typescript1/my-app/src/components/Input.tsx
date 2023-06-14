import React, { useState } from 'react';

type InputProps = {
  placeholder: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = (props: InputProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    props.handleChange(event);
  };

  return (
    <input
      type="text"
      value={inputValue}
      placeholder={props.placeholder}
      onChange={handleInputChange}
    />
  );
};
