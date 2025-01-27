import { useQuery } from '@tanstack/react-query';
import { getSubcategories } from '@src/api/subcategories.ts';

export const GET_SUBCATEGORIES = 'GET_SUBCATEGORIES';

const useGetSubcategories = () => {
  return useQuery({
    queryKey: [GET_SUBCATEGORIES],
    queryFn: getSubcategories,
  });
};

export default useGetSubcategories;
