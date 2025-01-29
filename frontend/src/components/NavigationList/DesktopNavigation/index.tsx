import useGetCategories from '@hooks/api/useGetCategories.ts';
import NavigationCategory from '@components/NavigationList/DesktopNavigation/NavigationCategory';

type TCategory = {
  _id: string;
};

const DesktopNavigation = () => {
  const { data } = useGetCategories();

  if (!data) return null;

  const categories: TCategory[] = data as TCategory[];

  return (
    <div className="mb-4 hidden lg:mb-0 lg:flex">
      {categories.map((item, index) => (
        <NavigationCategory
          key={item._id}
          isLastItem={index === categories.length - 1}
          {...item}
        />
      ))}
    </div>
  );
};

export default DesktopNavigation;
