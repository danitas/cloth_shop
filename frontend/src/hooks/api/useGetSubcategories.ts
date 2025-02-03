import { useQuery } from '@tanstack/react-query';
import { getSubcategories } from '@src/api/subcategories.ts';

export const GET_SUBCATEGORIES = 'GET_SUBCATEGORIES';

type TGetSubcategories = {
  slug?: string;
};

const useGetSubcategories = (props: TGetSubcategories = {}) => {
  return useQuery({
    queryKey: [GET_SUBCATEGORIES],
    queryFn: () => getSubcategories(props.slug),
  });
};

export default useGetSubcategories;
