import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import styled from 'styled-components';
import Link from 'next/link';
import formatMoney from '../lib/formatMoney';
import ErrorMessage from '../components/ErrorMessage';
import OrderItemStyles from '../components/styles/OrderItemStyles';

const USER_ORDERS_QUERY = gql`
  query USER_ORDERS_QUERY {
    allOrders {
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

const OrderUl = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 4rem;
`;

function OrdersPage() {
  const { data, error, loading } = useQuery(USER_ORDERS_QUERY);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  const { allOrders } = data;

  function countItemsInAnOrder(order) {
    const itemCount = order.items.reduce(
      (tally, currentItem) => tally + currentItem.quantity,
      0
    );
    return itemCount;
  }

  const numOrders = allOrders.length;

  return (
    <div>
      <Head>
        <title>Your Orders ({allOrders.length})</title>
      </Head>
      <h2>
        You have {numOrders} {numOrders === 1 ? 'order!' : 'orders!'}
      </h2>
      <OrderUl>
        {allOrders.map((order) => {
          const itemCount = countItemsInAnOrder(order);
          const productCount = order.items.length;
          return (
            <OrderItemStyles key={order.id}>
              <Link href={`/order/${order.id}`}>
                <a>
                  <div className="order-meta">
                    <p>
                      {itemCount} {itemCount === 1 ? 'Item' : 'Items'}
                    </p>
                    <p>
                      {productCount}{' '}
                      {productCount === 1 ? 'Product' : 'Products'}
                    </p>
                    <p>{formatMoney(order.total)}</p>
                  </div>
                  <div className="images">
                    {order.items.map((item) => (
                      <img
                        key={`image-${item.id}`}
                        src={item.photo?.image?.publicUrlTransformed}
                        alt={item.name}
                      />
                    ))}
                  </div>
                </a>
              </Link>
            </OrderItemStyles>
          );
        })}
      </OrderUl>
    </div>
  );
}

export default OrdersPage;
