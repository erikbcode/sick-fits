import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import SignUp, { SIGNUP_MUTATION } from '../components/SignUp';
import { fakeUser } from '../lib/testUtils';

const me = fakeUser();
const password = 'testingg';

const mocks = [
  // mutation mock
  {
    request: {
      query: SIGNUP_MUTATION,
      variables: {
        name: me.name,
        email: me.email,
        password,
      },
    },
    result: {
      data: {
        createUser: {
          __typename: 'User',
          id: 'abc123',
          email: me.email,
          name: me.name,
        },
      },
    },
  },
  // current user mock
  /* {
    request: { query: CURRENT_USER_QUERY },
    result: {
      data: { authenticatedItem: { me } },
    },
  }, */
];

describe('<SignUp />', () => {
  it('renders and matches snapshot', () => {
    const { container } = render(
      <MockedProvider mocks={mocks}>
        <SignUp />
      </MockedProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it('calls the mutation properly', async () => {
    const { container, debug } = render(
      <MockedProvider mocks={mocks}>
        <SignUp />
      </MockedProvider>
    );
    // type into the boxes
    userEvent.type(screen.getByPlaceholderText('Enter your name'), me.name);
    userEvent.type(screen.getByPlaceholderText('Enter your email'), me.email);
    userEvent.type(
      screen.getByPlaceholderText('Enter your password'),
      password
    );
    // click the submit
    userEvent.click(screen.getByText('Sign Up'));
    await screen.findByText(
      `Signed up with ${me.email} - Please sign in to your account now!`
    );
    debug();
  });
});
