import axiosRequest from '@utils/requestHelper.ts';
import { TSubcategories } from '@src/api/subcategories.ts';

export const getCategories = async () => {
  return await axiosRequest({
    method: 'GET',
    url: '/categories',
  });
};

export type TCategory = {
  _id: string;
  name: string;
  subcategories: TSubcategories[];
  slug: string;
};

export const getCategory = async (
  category_slug?: string
): Promise<TCategory> => {
  return await axiosRequest({
    method: 'GET',
    url: `/categories/${category_slug ? category_slug : ''}`,
  });
};
