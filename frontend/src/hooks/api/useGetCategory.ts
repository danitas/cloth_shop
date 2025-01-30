import { useQuery } from '@tanstack/react-query';
import { getCategory } from '@src/api/category.ts';

export const GET_CATEGORY = 'GET_CATEGORY';

type TGetCategory = {
  category_id?: string;
};

const useGetCategories = (props: TGetCategory = {}) => {
  return useQuery({
    queryKey: [GET_CATEGORY],
    queryFn: () => getCategory(props.category_id),
  });
};

export default useGetCategories;
