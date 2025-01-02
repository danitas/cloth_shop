import { desktopNavigationItems } from '../../../data/navigatin.ts';

const DesktopNavigation = () => {
  return (
    <div className="mb-4 hidden lg:flex">
      {desktopNavigationItems.map((item) => (
        <div className="group relative" key={item.id}>
          <a
            href={item.url}
            key={item.id}
            className="text-gray-800 mx-5 flex text-base font-bold uppercase"
          >
            {item.name}
          </a>
          {item.children && (
            <div className="absolute left-0 mt-2 hidden rounded bg-white shadow-lg group-hover:block">
              {item.children.map((child) => (
                <a
                  href={child.url}
                  key={child.id}
                  className="text-gray-600 hover:bg-gray-100 block px-4 py-2"
                >
                  {child.name}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DesktopNavigation;
