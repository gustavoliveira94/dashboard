import { fireEvent } from '@testing-library/react';

import renderWithRedux from 'tests/helpers';

import Logout from '../Logout';

describe('Testing component <Logout />', () => {
  it('Click button', () => {
    const initialState = { auth: { isLogged: true } };

    const { getByText } = renderWithRedux(<Logout>Click</Logout>, {
      initialState,
    });

    const onClick = jest.fn();

    const button = getByText(/logout/i);
    button.onclick = onClick;

    fireEvent.click(button);

    expect(onClick).toBeCalledTimes(1);
  });

  it('Check render user logged', () => {
    const initialState = { auth: { isLogged: true } };

    const { queryByText } = renderWithRedux(<Logout>Click</Logout>, {
      initialState,
    });

    const button = queryByText(/logout/i);

    expect(button).toBeInTheDocument();
  });

  it('Check render user not logged', () => {
    const { queryByText } = renderWithRedux(<Logout>Click</Logout>);

    const button = queryByText(/logout/i);

    expect(button).not.toBeInTheDocument();
  });
});
