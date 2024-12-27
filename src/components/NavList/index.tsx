import clsx from 'clsx';
import { navigationItems } from '../../data/navigatin.ts';

export const NavList = () => {
  return (
    <ul
      className={clsx(
        'mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8'
      )}
    >
      {navigationItems.map((item) => (
        <li key={item.id}>
          <a
            href="#"
            className={clsx(
              'lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 uppercase text-gray-700 hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent lg:dark:hover:text-white',
              item.id === 'home' &&
                'bg-primary-700 lg:text-primary-700 text-white lg:bg-transparent'
            )}
            aria-current={item.id === 'home' ? 'page' : undefined}
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};
