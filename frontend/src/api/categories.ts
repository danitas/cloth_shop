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
  subcategory: TSubcategories[];
};

export const getCategory = async (category_id?: string): Promise<TCategory> => {
  return await axiosRequest({
    method: 'GET',
    url: `/categories/${category_id ? category_id : ''}`,
  });
};
