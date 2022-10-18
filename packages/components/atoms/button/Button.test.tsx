import { render } from '@testing-library/react';

import { Button } from '.';

describe('Button component', () => {
  test('renders a button with the test label', () => {
    const { getByText } = render(<Button label='test' />);

    expect(getByText('test')).toBeTruthy();
  });
});
