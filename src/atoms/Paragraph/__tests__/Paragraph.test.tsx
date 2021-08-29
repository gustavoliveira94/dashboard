import { render } from '@testing-library/react';

import Paragraph from '../Paragraph';

describe('Testing atom <Paragraph />', () => {
  it('Render props', () => {
    const { getByText } = render(
      <Paragraph fontSize="20px">Children</Paragraph>,
    );

    expect(getByText('Children')).toHaveStyle('font-size: 20px');
  });
});
