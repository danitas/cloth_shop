import { useQuery } from '@tanstack/react-query';
import { getCategories } from '@src/api/categories.ts';

export const GET_CATEGORIES = 'GET_CATEGORIES';

const useGetCategories = () => {
  return useQuery({
    queryKey: [GET_CATEGORIES],
    queryFn: getCategories,
  });
};

export default useGetCategories;
