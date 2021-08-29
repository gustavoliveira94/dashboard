/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState, forwardRef } from 'react';

import { Container, Content } from './styles';

export interface InputProps {
  placeholder: string;
  type?: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
  ref?: any;
  value?: string;
  error?: boolean;
}

const Input: React.FC<InputProps> = forwardRef(
  ({ placeholder, type, name, onChange, required, error }, ref) => {
    const [hidden, sethidden] = useState(true);

    return (
      <Container>
        <Content
          placeholder={placeholder}
          type={hidden ? type : 'text'}
          ref={ref}
          name={name}
          onChange={onChange}
          required={required}
          error={error}
        />
        {type === 'password' ? (
          <img
            src={`/icons/${hidden ? 'eye.closed.svg' : 'eye.icon.svg'}`}
            alt="hidden"
            height={20}
            onClick={() => sethidden(!hidden)}
          />
        ) : null}
      </Container>
    );
  },
);

Input.displayName = 'Input';

export default Input;
