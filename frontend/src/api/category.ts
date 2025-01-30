import axiosRequest from '@utils/requestHelper.ts';

export const getCategory = async (category_id?: string) => {
  return await axiosRequest({
    method: 'GET',
    url: `/categories/${category_id ? category_id : ''}`,
  });
};
