import axiosRequest from '@utils/requestHelper.ts';

export const getProducts = async () => {
  return await axiosRequest({ method: 'GET', url: '/products' });
};
