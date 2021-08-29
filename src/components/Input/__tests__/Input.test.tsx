import { render, fireEvent } from '@testing-library/react';

import Input from '../Input';

describe('Testing component <Input />', () => {
  it('Check props', () => {
    const { getByPlaceholderText } = render(
      <Input placeholder="E-mail" onChange={jest.fn()} />,
    );

    const input = getByPlaceholderText('E-mail');

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('');

    fireEvent.change(input, { target: { value: 'teste@teste.com.br' } });

    expect(input).toHaveValue('teste@teste.com.br');
  });

  it('Check error input', () => {
    const { getByPlaceholderText } = render(
      <Input placeholder="E-mail" error />,
    );

    const input = getByPlaceholderText('E-mail');

    expect(input).toHaveStyle('border: 1px solid #ff4d4f');
  });
});
