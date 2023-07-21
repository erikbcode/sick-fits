import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import RequestReset, {
  REQUEST_RESET_MUTATION,
} from '../components/RequestReset';
import { fakeUser } from '../lib/testUtils';

const me = fakeUser();

const mocks = [
  {
    request: {
      query: REQUEST_RESET_MUTATION,
      variables: {
        email: me.email,
      },
    },
    result: {
      data: {
        sendUserPasswordResetLink: null,
      },
    },
  },
];

describe('<RequestReset />', () => {
  it('renders and matches snapshot', () => {
    const { container, debug } = render(
      <MockedProvider>
        <RequestReset />
      </MockedProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it('calls the mutation when submitted', async () => {
    const { container, debug } = render(
      <MockedProvider mocks={mocks}>
        <RequestReset />
      </MockedProvider>
    );

    userEvent.type(screen.getByPlaceholderText('Enter your email'), me.email);
    userEvent.click(screen.getByText(/Request Reset/));
    const success = await screen.findByText(
      'Check your email for a password reset link!'
    );
    expect(success).toBeInTheDocument();
  });
});
