import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import OrderStyles from './styles/OrderStyles';
import formatMoney from '../lib/formatMoney';
import ErrorMessage from './ErrorMessage';

const SINGLE_ORDER_QUERY = gql`
  query SINGLE_ORDER_QUERY($id: ID!) {
    order: Order(where: { id: $id }) {
      id
      label
      total
      charge
      user {
        name
        id
      }
      items {
        id
        name
        price
        quantity
        description
        photo {
          image {
            publicUrlTransformed
          }
        }
      }
    }
  }
`;

function SingleOrder({ id }) {
  const { data, error, loading } = useQuery(SINGLE_ORDER_QUERY, {
    variables: { id },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  const { order } = data;

  const quantity = order.items.reduce(
    (tally, currentItem) => tally + currentItem.quantity,
    0
  );
  console.log('data:', data);
  return (
    <OrderStyles>
      <Head>
        <title>Sick Fits - Order {order.id}</title>
      </Head>
      <p>
        <span>Order Id: </span>
        <span>{order.id}</span>
      </p>
      <p>
        <span>Charge: </span>
        <span>{order.charge}</span>
      </p>
      <p>
        <span>Order Total: </span>
        <span>{formatMoney(order.total)}</span>
      </p>
      <p>
        <span>ItemCount: </span>
        <span>{quantity}</span>
      </p>
      <div className="items">
        {order.items.map((item) => (
          <div className="order-item" key={item.id}>
            <img src={item.photo.image.publicUrlTransformed} alt={item.name} />
            <div className="item-details">
              <h2>{item.name}</h2>
              <p>Qty: {item.quantity}</p>
              <p>Each: {formatMoney(item.price)}</p>
              <p>Subtotal: {formatMoney(item.quantity * item.price)}</p>
              <p>Item Description: {item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </OrderStyles>
  );
}

export default SingleOrder;
