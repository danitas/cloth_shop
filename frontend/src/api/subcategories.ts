import axiosRequest from '@utils/requestHelper.ts';

export type TSubcategories = {
  _id: string;
  name: string;
  category_id: string;
  image: string;
};

export const getSubcategories = async (
  category_id?: string
): Promise<TSubcategories> => {
  return await axiosRequest({
    method: 'GET',
    url: `/subcategories/${category_id ? `?filter_field=category_id&filter_value=${category_id}` : ''}`,
  });
};
