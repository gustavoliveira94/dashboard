/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, { useState } from 'react';

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
    const inputFocus: any = inputs.find((input) => {
      return input?.required && !input?.value;
    });

    return inputFocus?.focus();
  };

  const validateForm = () => {
    const checkError = inputs.filter(
      (input) => input?.required && !input.value,
    );

    validateInput();

    return !!checkError.length;
  };

  const getValues = Object.assign(
    {},
    ...inputs.map((input) => {
      return {
        [input?.name as string]: input?.value,
      };
    }),
  );

  return {
    getInput,
    validateForm,
    getValues,
  };
};
