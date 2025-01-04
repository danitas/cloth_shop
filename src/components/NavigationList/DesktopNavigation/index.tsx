import { desktopNavigationItems } from '@data/navigation.ts';
import Typography from '@shared/Typography';

const DesktopNavigation = () => {
  return (
    <div className="mb-4 hidden lg:flex">
      {desktopNavigationItems.map((item) => (
        <div className="group relative" key={item.id}>
          <Typography
            tag="a"
            href={item.url}
            key={item.id}
            weight="bold"
            size="sm"
            uppercase
            className="mx-5 flex"
          >
            {item.name}
          </Typography>
          {item.children && (
            <div className="absolute left-0 mt-2 hidden rounded bg-white shadow-lg group-hover:block">
              {item.children.map((child) => (
                <Typography
                  tag="a"
                  href={child.url}
                  key={child.id}
                  size="sm"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                >
                  {child.name}
                </Typography>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DesktopNavigation;
