import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import SingleProduct from '../../components/SingleProduct';

export default function SingleProductPage() {
  const router = useRouter();
  const { query } = router;
  console.log(query.id);
  return <SingleProduct id={query.id} />;
}
