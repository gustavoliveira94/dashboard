/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState, forwardRef } from 'react';

import { Container, Content } from './styles';

interface InputProps {
  placeholder: string;
  type?: string;
  name: string;
  onChange?: (e: any) => void;
  required: boolean;
  ref?: any;
}

const Input: React.FC<InputProps> = forwardRef(
  ({ placeholder, type, name, onChange, required }, ref) => {
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
        />
        {type === 'password' ? (
          <img
            src="/icons/eye.closed.svg"
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
