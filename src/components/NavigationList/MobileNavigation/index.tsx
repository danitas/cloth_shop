import { mobileNavigationItems } from '@data/navigation.ts';

const MobileNavigation = () => {
  return (
    <div className="flex-col py-4 sm:flex lg:hidden">
      {mobileNavigationItems.map((item) => (
        <a
          href={item.url}
          key={item.id}
          className="flex py-4 text-lg font-bold uppercase text-gray-800"
        >
          {item.name}
        </a>
      ))}
    </div>
  );
};

export default MobileNavigation;
