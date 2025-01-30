import clsx from 'clsx';
import classes from './styles.module.scss';
import NavigationLinks from '@components/NavigationList/NavigationLinks';
import SubcategoriesLinks from '@components/NavigationList/SubcategoriesLinks';
import NewArrivalsNavDD from '../NewArrivalsNavDD';
import img from '@assets/images/navigation/menu_cabare.jpg';
import imgLast from '@assets/images/navigation/menu_last.jpg';
import { TSubcategory } from '@src/api/subcategories.ts';

const Subcategories = ({
  subCategories,
  isLastItem,
  isVisible,
}: {
  subCategories?: TSubcategory[];
  isLastItem?: boolean;
  isVisible: boolean;
}) => {
  if (!subCategories?.length) return null;

  return (
    <div
      className={clsx(
        classes.subcategoryWrapper,
        'transition-all duration-500 ease-in-out',
        isVisible
          ? 'visible translate-y-0 opacity-100'
          : 'invisible translate-y-2 opacity-0'
      )}
    >
      <div className="mx-20 flex justify-between py-6 lg:h-[305px]">
        <div className="flex h-full">
          <SubcategoriesLinks subCategories={subCategories} />
          <NavigationLinks subCategories={subCategories} />
        </div>
        <NewArrivalsNavDD imgSource={isLastItem ? imgLast : img} />
      </div>
    </div>
  );
};

export default Subcategories;
