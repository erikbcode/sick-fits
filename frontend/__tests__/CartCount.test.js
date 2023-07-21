import { render, screen } from '@testing-library/react';
import wait from 'waait';
import CartCount from '../components/CartCount';

describe('<CartCount />', () => {
  it('renders properly', () => {
    const { container } = render(<CartCount count={10} />);
  });

  it('matches snapshot', () => {
    const { container } = render(<CartCount count={11} />);
    expect(container).toMatchSnapshot();
  });

  it('updates via props', async () => {
    const { container, rerender, debug } = render(<CartCount count={11} />);
    expect(container.textContent).toBe('11');
    // above same as expect(container).toHaveTextContent('11');
    // update the props
    rerender(<CartCount count={12} />);
    expect(container.textContent).toBe('1211'); // during rerendering
    // wait for rerender
    await wait(400);
    // alternative: await screen.findByText('12');
    expect(container.textContent).toBe('12');
    expect(container).toMatchSnapshot();
  });
});
