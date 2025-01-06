import { desktopNavigationItems } from '@data/navigation.ts';
import NavigationCategory from '@components/NavigationList/DesktopNavigation/NavigationCategory';

const DesktopNavigation = () => {
  return (
    <div className="mb-4 hidden lg:mb-0 lg:flex">
      {desktopNavigationItems.map((item, index) => (
        <NavigationCategory
          key={item.id}
          isLastItem={index === desktopNavigationItems.length - 1}
          {...item}
        />
      ))}
    </div>
  );
};

export default DesktopNavigation;
