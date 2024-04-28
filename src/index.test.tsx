import { render, screen } from '@testing-library/react';
import { MiniDecimal } from '.';

describe('MiniDecimal', () => {
  it('render', async () => {
    render(<MiniDecimal>foobar</MiniDecimal>);
    await screen.findByText('foobar');
  });
});
