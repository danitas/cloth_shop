import { TSharedCategory } from '@components/NavigationList/DesktopNavigation/NavigationCategory';

const NavigationLinks = ({
  subCategories,
}: {
  subCategories?: TSharedCategory[];
}) => {
  if (!subCategories?.length) return null;

  return (
    <div>
      {subCategories.map((link) => (
        <a
          href={link.url}
          key={link.id}
          className="block px-4 py-2 text-base uppercase text-black hover:text-black hover:underline"
        >
          {link.name}
        </a>
      ))}
    </div>
  );
};

export default NavigationLinks;
