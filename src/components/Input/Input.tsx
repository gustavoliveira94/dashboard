/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState, forwardRef } from 'react';

import { Container, Content, Error } from './styles';

export interface InputProps {
  placeholder?: string;
  type?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  ref?: any;
  value?: string;
  error?: string;
}

const Input: React.FC<InputProps> = forwardRef(
  ({ placeholder, type, name, onChange, required, error, value }, ref) => {
    const [hidden, sethidden] = useState(true);

    return (
      <Container>
        <Content
          data-testid="input"
          placeholder={placeholder}
          type={hidden ? type : 'text'}
          ref={ref}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          error={error}
        />
        {type === 'password' ? (
          <img
            src={`/icons/${hidden ? 'eye.closed.svg' : 'eye.icon.svg'}`}
            alt="hidden"
            height={25}
            width={25}
            onClick={() => sethidden(!hidden)}
          />
        ) : null}
        <Error>{error}</Error>
      </Container>
    );
  },
);

Input.displayName = 'Input';

export default Input;
