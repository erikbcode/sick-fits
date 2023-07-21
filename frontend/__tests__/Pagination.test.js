import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import Pagination, { PAGINATION_QUERY } from '../components/Pagination';
import { makePaginationMocksFor } from '../lib/testUtils';
import '@testing-library/jest-dom';

describe('<Pagination />', () => {
  it('displays a loading message', () => {
    const { container, debug } = render(
      <MockedProvider mocks={makePaginationMocksFor(1)}>
        <Pagination />
      </MockedProvider>
    );
    expect(container).toHaveTextContent('Loading...');
  });

  it('renders pagination for 18 items', async () => {
    const { container, debug } = render(
      <MockedProvider mocks={makePaginationMocksFor(18)}>
        <Pagination page={1} />
      </MockedProvider>
    );
    await screen.findByTestId('pagination');
    debug();
    expect(container).toHaveTextContent('1 of 9');
    const pageCountSpan = screen.getByTestId('pageCount');
    expect(pageCountSpan).toHaveTextContent('9');
    expect(container).toMatchSnapshot();
  });

  it('disables the prev button on first page', async () => {
    const { container, debug } = render(
      <MockedProvider mocks={makePaginationMocksFor(6)}>
        <Pagination page={1} />
      </MockedProvider>
    );

    await screen.findByTestId('pagination');
    const prevButton = screen.getByText(/Prev/);
    const nextButton = screen.getByText(/Next/);
    expect(prevButton).toHaveAttribute('aria-disabled', 'true');
    expect(nextButton).toHaveAttribute('aria-disabled', 'false');
  });

  it('enables all on middle page', async () => {
    const { container, debug } = render(
      <MockedProvider mocks={makePaginationMocksFor(6)}>
        <Pagination page={3} />
      </MockedProvider>
    );

    await screen.findByTestId('pagination');
    const prevButton = screen.getByText(/Prev/);
    const nextButton = screen.getByText(/Next/);
    expect(prevButton).toHaveAttribute('aria-disabled', 'false');
    expect(nextButton).toHaveAttribute('aria-disabled', 'true');
  });

  it('disables the next button on last page', async () => {
    const { container, debug } = render(
      <MockedProvider mocks={makePaginationMocksFor(18)}>
        <Pagination page={2} />
      </MockedProvider>
    );

    await screen.findByTestId('pagination');
    const prevButton = screen.getByText(/Prev/);
    const nextButton = screen.getByText(/Next/);
    expect(prevButton).toHaveAttribute('aria-disabled', 'false');
    expect(nextButton).toHaveAttribute('aria-disabled', 'false');
  });
});
