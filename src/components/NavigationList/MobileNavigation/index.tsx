import { mobileNavigationItems } from '@data/navigation.ts';
import Typography from '@shared/Typography';

const MobileNavigation = () => {
  return (
    <div className="flex-col py-4 sm:flex lg:hidden">
      {mobileNavigationItems.map((item) => (
        <Typography
          tag="a"
          href={item.url}
          key={item.id}
          weight="bold"
          size="lg"
          uppercase
          className="flex py-4"
        >
          {item.name}
        </Typography>
      ))}
    </div>
  );
};

export default MobileNavigation;
