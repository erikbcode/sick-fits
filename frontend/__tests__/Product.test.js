import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MockedProvider } from '@apollo/react-testing';
import Product from '../components/Product';
import { fakeItem } from '../lib/testUtils';
import { CartStateProvider } from '../lib/cartState';

const product = fakeItem();

describe('<Product />', () => {
  it('renders out the price tag and title', () => {
    const { container, debug } = render(
      <MockedProvider>
        <CartStateProvider>
          <Product product={product} />
        </CartStateProvider>
      </MockedProvider>
    );
    const priceTag = screen.getByText('$50');
    expect(priceTag).toBeInTheDocument();

    const link = container.querySelector('a');
    expect(link).toHaveAttribute('href', '/product/abc123');
    expect(link).toHaveTextContent(product.name);
    const span = container.querySelector('span');
    expect(span).toHaveTextContent('$50');
  });
});
