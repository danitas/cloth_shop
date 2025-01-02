import { mobileNavigationItems } from '../../../data/navigatin.ts';

const MobileNavigation = () => {
  return (
    <div className="flex-col py-4 sm:flex lg:hidden">
      {mobileNavigationItems.map((item) => (
        <a
          href={item.url}
          key={item.id}
          className="text-gray-800 flex py-4 text-lg font-bold uppercase"
        >
          {item.name}
        </a>
      ))}
    </div>
  );
};

export default MobileNavigation;
