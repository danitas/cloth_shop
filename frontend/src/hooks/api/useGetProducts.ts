import { useQuery } from '@tanstack/react-query';
import { getProducts, TGetProducts } from '@src/api/products.ts';

export const GET_PRODUCTS = 'GET_PRODUCTS';

const useGetProducts = (params?: TGetProducts) => {
  return useQuery({
    queryKey: [GET_PRODUCTS, params?.page],
    queryFn: () => getProducts(params ?? {}),
  });
};

export default useGetProducts;
