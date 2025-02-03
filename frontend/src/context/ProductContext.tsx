import React, { useContext, useState } from 'react';
import useGetProducts from '@hooks/api/useGetProducts.ts';
import { TProduct } from '@src/api/products.ts';

type TProductPaginationContext = {
  totalPages: number;
  pageArray: number[];
  activePage: number;
  setActivePage: (page: number) => void;
  products: TProduct[];
};

type TProductPaginationProps = React.PropsWithChildren;

const ProductContext = React.createContext<
  TProductPaginationContext | undefined
>(undefined);

const ProductProvider = ({ children }: TProductPaginationProps) => {
  const [activePage, setActivePage] = useState(1);
  const { data } = useGetProducts({
    filter_field: 'category_slug',
    filter_value: 'shoes',
    page: activePage.toString(),
    page_size: '3',
  });

  if (!data) return null;

  const totalPages = Math.ceil(data.total_count / data.page_size);
  const pageArray = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <ProductContext.Provider
      value={{
        totalPages,
        pageArray,
        activePage,
        setActivePage,
        products: data.products,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export function useProductContext() {
  const value = useContext(ProductContext);

  if (value == undefined)
    throw Error('useSidebarContext must be used within context');

  return value;
}

export default ProductProvider;
