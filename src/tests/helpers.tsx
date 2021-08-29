import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { render } from '@testing-library/react';

import { GlobalStyles } from 'styles/globals';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const renderWithRedux = (
  component: JSX.Element,
  { initialState, store = mockStore(initialState) }: any = {},
) => {
  jest.mock('react-redux', () => ({
    useDispatch: () => jest.fn(),
  }));

  return {
    ...render(
      <>
        <Provider store={store}>{component}</Provider>
        <GlobalStyles />
      </>,
    ),
  };
};

export default renderWithRedux;
