import { useQuery } from '@tanstack/react-query';
import { getCategory } from '@src/api/categories.ts';

export const GET_CATEGORY = 'GET_CATEGORY';

type TGetCategory = {
  category_slug?: string;
};

const useGetCategory = (props: TGetCategory = {}) => {
  return useQuery({
    queryKey: [GET_CATEGORY],
    queryFn: () => getCategory(props.category_slug),
  });
};

export default useGetCategory;
