/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import { useState } from 'react';

export const useForm = () => {
  const [inputs, setInputs] = useState<
    React.InputHTMLAttributes<HTMLInputElement>[]
  >([]);

  const getInput = (newInput: React.InputHTMLAttributes<HTMLInputElement>) => {
    const inputExists = inputs.filter(
      (input) => input?.name === newInput?.name,
    )?.length;

    if (inputExists || newInput === null) {
      return;
    }

    setInputs([...inputs, newInput]);
  };

  const validateInput = () => {
    inputs.map((input) => {
      if (input?.required && !input.value) {
        return input?.focus();
      }
    });
  };

  const validateForm = () => {
    const checkError = inputs.filter(
      (input) => input?.required && !input.value,
    );

    validateInput();

    return !!checkError.length;
  };

  return {
    getInput,
    validateForm,
  };
};
