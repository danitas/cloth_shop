import clsx from 'clsx';

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
    <h2 className="uppercase">{title}</h2>
    <div
      className={clsx({
        'lg:grid lg:grid-cols-2': multiColumns,
        'flex flex-col': !multiColumns,
      })}
    >
      {navItems.map((item) => (
        <a
          href={item.url}
          key={item.id}
          className="font-baseLight flex py-1 text-sm capitalize"
        >
          {item.name}
        </a>
      ))}
    </div>
  </div>
);

export default FooterNavSection;
