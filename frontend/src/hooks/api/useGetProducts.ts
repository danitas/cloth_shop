import { useQuery } from '@tanstack/react-query';
import { getProducts } from '@src/api/products.ts';

export const GET_PRODUCTS = 'GET_PRODUCTS';

const useGetProducts = () => {
  return useQuery({
    queryKey: [GET_PRODUCTS],
    queryFn: getProducts,
  });
};

export default useGetProducts;
