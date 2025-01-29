import axiosRequest from '@utils/requestHelper.ts';

export const getCategories = async () => {
  return await axiosRequest({
    method: 'GET',
    url: '/categories',
  });
};
