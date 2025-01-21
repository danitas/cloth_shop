import clsx from 'clsx';
import Typography from '@shared/Typography';

type FooterNavSectionProps = {
  title: string;
  multiColumns?: boolean;
  navItems: NavItem[];
};

type NavItem = {
  id: number;
  name: string;
  url: string;
};

const FooterNavSection = ({
  title,
  navItems,
  multiColumns = false,
}: FooterNavSectionProps) => (
  <div
    className={clsx({
      'lg:w-1/2': multiColumns,
      'lg:w-1/4': !multiColumns,
    })}
  >
    <Typography tag="h2" uppercase>
      {title}
    </Typography>
    <div
      className={clsx({
        'lg:grid lg:grid-cols-2': multiColumns,
        'flex flex-col': !multiColumns,
      })}
    >
      {navItems.map((item) => (
        <Typography
          tag="a"
          href={item.url}
          key={item.id}
          size="sm"
          className="flex py-1 font-baseLight capitalize"
        >
          {item.name}
        </Typography>
      ))}
    </div>
  </div>
);

export default FooterNavSection;
