import { render } from '@testing-library/react';

import { H2 } from '.';

test('renders a text', () => {
  const { container, getByText } = render(
    <H2 label='teste' className='text-five' />,
  );
  expect(getByText('teste')).toBeInTheDocument();
  expect(container.firstChild).toMatchInlineSnapshot(`
    <h2
      class="text-lg font-semibold text-five"
    >
      teste
    </h2>
  `);
});
