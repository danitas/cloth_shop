import { useQuery } from '@tanstack/react-query';
import { getSubcategories } from '@src/api/subcategories.ts';

export const GET_SUBCATEGORIES = 'GET_SUBCATEGORIES';

type TGetSubcategories = {
  category_id?: string;
};

const useGetSubcategories = (props: TGetSubcategories = {}) => {
  return useQuery({
    queryKey: [GET_SUBCATEGORIES],
    queryFn: () => getSubcategories(props.category_id),
  });
};

export default useGetSubcategories;
