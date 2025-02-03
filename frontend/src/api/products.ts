import axiosRequest from '@utils/requestHelper.ts';

export type TProduct = {
  _id: string;
  name: string;
  price: number;
  in_stock: number;
  currency: string;
  image: string;
  category_id: string;
  category_slug: string;
  subcategory_id: string;
  subcategory_slug: string;
  sizes: string[];
  colors: string[];
  discount?: string;
  is_new?: boolean;
  is_favorite?: boolean;
  quantity: number;
  discount_price?: number;
  has_size: boolean;
};

export type TProducts = {
  total_count: number;
  page: number;
  page_size: number;
  products: TProduct[];
};

export type TGetProducts = {
  filter_field?: string;
  filter_value?: string;
  page?: string;
  page_size?: string;
};

export const getProducts = async ({
  filter_field,
  filter_value,
  page,
  page_size,
}: TGetProducts): Promise<TProducts> => {
  const params = {
    ...(filter_field && { filter_field }),
    ...(filter_value && { filter_value }),
    ...(page && { page }),
    ...(page_size && { page_size }),
  };

  const query = new URLSearchParams(params);

  return await axiosRequest({
    method: 'GET',
    url: `/products/${query.toString() ? `?${query.toString()}` : ''}`,
  });
};
