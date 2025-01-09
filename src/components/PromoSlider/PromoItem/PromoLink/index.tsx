import Typography from '@shared/Typography';

type PromoLinkProps = {
  link?: string;
  linkTitle?: string;
};

const PromoLink = ({ link, linkTitle }: PromoLinkProps) => {
  if (!link) return null;

  return (
    <Typography
      tag="a"
      href={link}
      title={linkTitle}
      target="_blank"
      size="sm"
      className="text-baseLight mx-1 text-white underline"
    >
      {linkTitle}
    </Typography>
  );
};

export default PromoLink;
