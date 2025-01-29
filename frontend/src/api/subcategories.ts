import axiosRequest from '@utils/requestHelper.ts';

export const getSubcategories = async (category_id?: string) => {
  return await axiosRequest({
    method: 'GET',
    url: `/subcategories/${category_id ? `?filter_field=category_id&filter_value=${category_id}` : ''}`,
  });
};
