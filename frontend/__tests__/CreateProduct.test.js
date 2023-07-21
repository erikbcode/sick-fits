import { render, screen, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Router, { useRouter } from 'next/router'; // we will mock this
import wait from 'waait';
import { fakeItem } from '../lib/testUtils';
import CreateProduct, {
  CREATE_PRODUCT_MUTATION,
} from '../components/CreateProduct';
import { ALL_PRODUCTS_QUERY } from '../components/Products';

const item = fakeItem();

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

const pushMock = jest.fn();
useRouter.mockReturnValue({
  push: pushMock,
});

describe('<CreateProduct />', () => {
  it('renders and matches snapshot', () => {
    const { container } = render(
      <MockedProvider>
        <CreateProduct />
      </MockedProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it('handles the updating', async () => {
    const { container, debug } = render(
      <MockedProvider>
        <CreateProduct />
      </MockedProvider>
    );

    // type into the boxes
    userEvent.type(screen.getByPlaceholderText(/Name/), item.name);
    userEvent.clear(screen.getByPlaceholderText(/Price/));
    userEvent.type(screen.getByPlaceholderText(/Price/), item.price.toString());
    userEvent.type(
      screen.getByPlaceholderText(/Description/),
      item.description
    );
    // check that those boxes are populated
    debug();
    expect(screen.getByDisplayValue(item.name)).toBeInTheDocument();
    expect(screen.getByDisplayValue(item.price)).toBeInTheDocument();
    expect(screen.getByDisplayValue(item.description)).toBeInTheDocument();
  });

  it('creates the items when the form is submitted', async () => {
    // create the mocks for this one
    const mocks = [
      {
        request: {
          query: CREATE_PRODUCT_MUTATION,
          variables: {
            name: item.name,
            description: item.description,
            price: item.price,
            image: '',
          },
        },
        result: {
          data: {
            createProduct: {
              ...item, // all fake item fields
              id: 'abc123',
              __typename: 'Item',
            },
          },
        },
      },
      {
        request: {
          query: ALL_PRODUCTS_QUERY,
          variables: {
            skip: 0,
            first: 2,
          },
        },
        result: {
          data: {
            allProducts: [item],
          },
        },
      },
    ];
    const { container, debug } = render(
      <MockedProvider mocks={mocks}>
        <CreateProduct />
      </MockedProvider>
    );

    // type into the inputs
    userEvent.type(screen.getByPlaceholderText(/Name/), item.name);
    userEvent.type(screen.getByPlaceholderText(/Price/), item.price.toString());
    userEvent.type(
      screen.getByPlaceholderText(/Description/),
      item.description
    );
    // submit it and see if the page change has been called
    userEvent.click(screen.getByText(/Add Product/i));
    await waitFor(() => wait(500));
    expect(pushMock).toHaveBeenCalled();
    expect(pushMock).toHaveBeenCalledWith('/product/abc123');
  });
});
