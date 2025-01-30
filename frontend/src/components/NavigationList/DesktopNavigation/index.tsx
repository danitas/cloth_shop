import useGetCategories from '@hooks/api/useGetCategories.ts';
import NavigationCategory from '@components/NavigationList/DesktopNavigation/NavigationCategory';

const DesktopNavigation = () => {
  const { data } = useGetCategories();

  if (!data) return null;

  return (
    <div className="mb-4 hidden lg:mb-0 lg:flex">
      {data.map((item, index) => (
        <NavigationCategory
          key={item._id}
          isLastItem={index === data.length - 1}
          {...item}
        />
      ))}
    </div>
  );
};

export default DesktopNavigation;
