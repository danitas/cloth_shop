import axiosRequest from '@utils/requestHelper.ts';

export type TSubcategory = {
  _id: string;
  name: string;
  slug: string;
  category_slug: string;
  image: string;
};

export const getSubcategories = async (
  slug?: string
): Promise<TSubcategory> => {
  return await axiosRequest({
    method: 'GET',
    url: `/subcategories/${slug ? `?filter_field=slug&filter_value=${slug}` : ''}`,
  });
};
