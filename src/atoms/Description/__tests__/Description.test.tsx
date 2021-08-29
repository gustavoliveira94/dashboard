import { render } from '@testing-library/react';

import Description from '../Description';

describe('Testing atom <Description />', () => {
  it('Render props', () => {
    const { getByText } = render(<Description>Children</Description>);

    expect(getByText('Children')).toHaveStyle('font-size: 16px');
    expect(getByText('Children')).toHaveStyle('color: rgba(96, 99, 119)');
  });
});
