import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import React from 'react';
import { CURRENT_USER_QUERY } from './User';
import { useCart } from '../lib/cartState';

const ADD_TO_CART_MUTATION = gql`
  mutation ADD_TO_CART_MUTATION($id: ID!) {
    addToCart(productId: $id) {
      id
    }
  }
`;

function AddToCart({ id }) {
  const { openCart } = useCart();

  const [addToCart, { loading }] = useMutation(ADD_TO_CART_MUTATION, {
    variables: { id },
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  const handleAdd = () => {
    addToCart();
    openCart();
  };

  return (
    <button type="button" disabled={loading} onClick={handleAdd}>
      Add{loading && 'ing'} To Cart 🛒
    </button>
  );
}

export default AddToCart;
