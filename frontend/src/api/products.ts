import axiosRequest from '@utils/requestHelper.ts';

export const getProducts = () => {
  return axiosRequest({ method: 'GET', url: '/products' });
};
