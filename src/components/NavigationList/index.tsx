import { navigationItems } from '../../data/navigatin.ts';

const NavigationList = () => {
  return (
    <>
      {navigationItems.map((item) => (
        <a href={item.url} key={item.id} className={`text-gray-800`}>
          {item.name}
        </a>
      ))}
    </>
  );
};

export default NavigationList;
