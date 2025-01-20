import { useParams } from 'react-router-dom';
import Layout from '@components/Layout';

export default function Product() {
  const { categoryId, productId } = useParams();

  return (
    <Layout>
      <h1>Product Page</h1>
      <p>Category ID: {categoryId}</p>
      <p>Product ID: {productId}</p>
    </Layout>
  );
}
