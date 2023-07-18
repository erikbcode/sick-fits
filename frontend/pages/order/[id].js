import { useRouter } from 'next/router';
import React from 'react';
import SingleOrder from '../../components/SingleOrder';

function SingleOrderPage() {
  const router = useRouter();
  const { query } = router;
  return (
    <div>
      <h2>Order Details</h2>
      <SingleOrder id={query.id} />
    </div>
  );
}

export default SingleOrderPage;
