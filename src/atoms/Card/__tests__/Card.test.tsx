import { render } from '@testing-library/react';

import Card from 'atoms/Card';

describe('Testing atom <Card />', () => {
  it('Render children', () => {
    const { getByText } = render(
      <Card>
        <p>Children</p>
      </Card>,
    );

    expect(getByText('Children')).toBeInTheDocument();
  });
});
