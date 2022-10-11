import { render } from '@testing-library/react';

import { Button } from '.';

test('renders a button', () => {
  const { container, getByText } = render(<Button />);
  expect(getByText('Hellow')).toBeInTheDocument();
  expect(container.firstChild).toMatchInlineSnapshot(`
    <button>
      Hellow
    </button>
  `);
});
