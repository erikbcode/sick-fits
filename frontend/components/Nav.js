import React from 'react';
import Link from 'next/link';
import { gql, useMutation } from '@apollo/client';
import NavStyles from './styles/NavStyles';
import { useUser, CURRENT_USER_QUERY } from './User';
import Error from './ErrorMessage';
import SignOut from './SignOut';

function Nav() {
  const user = useUser();
  console.log(user);

  return (
    <NavStyles>
      <Link href="/products">Products</Link>
      {user && (
        <>
          <Link href="/sell">Sell</Link>
          <Link href="/orders">Orders</Link>
          <Link href="/account">Account</Link>
          <SignOut />
        </>
      )}
      {!user && (
        <>
          <Link href="/signin">Sign In</Link>
        </>
      )}
    </NavStyles>
  );
}

export default Nav;
