import axiosRequest from '@utils/requestHelper.ts';

export const getSubcategories = async () => {
  return await axiosRequest({
    method: 'GET',
    url: '/subcategories',
  });
};
