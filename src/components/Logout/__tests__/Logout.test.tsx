import { fireEvent } from '@testing-library/react';

import renderWithRedux from 'tests/helpers';

import Logout from '../Logout';

describe('Testing component <Logout />', () => {
  it('Click button', () => {
    const { getByText } = renderWithRedux(<Logout>Click</Logout>);

    const onClick = jest.fn();

    const button = getByText(/logout/i);
    button.onclick = onClick;

    fireEvent.click(button);

    expect(onClick).toBeCalledTimes(1);
  });
});
