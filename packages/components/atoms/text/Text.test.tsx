import { render } from '@testing-library/react';

import { H2 } from '.';

describe('Text components', () => {
  test('renders an H2 with the test label and className text-five', () => {
    const { getByText } = render(<H2 label='test' className='text-five' />);

    expect(getByText('test')).toBeTruthy();
  });
});
