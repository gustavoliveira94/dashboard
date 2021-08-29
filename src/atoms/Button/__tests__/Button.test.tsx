import { render, fireEvent } from '@testing-library/react';

import Button from 'atoms/Button';

describe('Testing atom <Button />', () => {
  it('Click button', () => {
    const { getByTestId } = render(<Button>Click</Button>);

    const onClick = jest.fn();

    const button = getByTestId('button');
    button.onclick = onClick;

    fireEvent.click(button);

    expect(onClick).toBeCalledTimes(1);
  });

  it('full width button', () => {
    const { getByTestId } = render(<Button fullWidth>Click</Button>);

    expect(getByTestId('button')).toHaveStyle('width: 100%');
  });
});
