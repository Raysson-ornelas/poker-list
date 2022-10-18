import { render } from '@testing-library/react';

import { Input } from '.';

describe('Input component', () => {
  test('renders an input with type email and with test text in the placeholder and label', () => {
    const { getByText } = render(
      <Input type='email' placeholder='test' label='test' />,
    );

    expect(getByText('test')).toBeTruthy();
  });
});
