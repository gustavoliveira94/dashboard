import { fireEvent } from '@testing-library/react';

import renderWithRedux from 'tests/helpers';

import Resume from '../Resume';

describe('Testing component <Resume />', () => {
  it('Check props', () => {
    const { getAllByTestId } = renderWithRedux(<Resume />);

    expect(getAllByTestId('hidden')?.length).toBe(4);
  });

  it('Click to show values', () => {
    const { getByRole, queryAllByTestId, getAllByText } = renderWithRedux(
      <Resume />,
    );

    const imghidden = getByRole('img', {
      name: /hidden/i,
    });

    fireEvent.click(imghidden);

    expect(queryAllByTestId('hidden')?.length).toBe(0);
    expect(getAllByText('R$ 0,00')?.length).toBe(2);
    expect(getAllByText('0%')?.length).toBe(2);
  });
});
