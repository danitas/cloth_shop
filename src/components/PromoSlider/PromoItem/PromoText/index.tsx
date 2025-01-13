import Typography from '@shared/Typography';
import clsx from 'clsx';

type PromoTextProps = {
  text: string;
  linkTitle?: string;
  link?: string;
};

const PromoText = ({ text, linkTitle = '', link }: PromoTextProps) => {
  const hasPlaceholder = text.includes('{0}');

  if (hasPlaceholder && link) {
    const parts = text.split('{0}');

    return (
      <>
        {parts[0] && (
          <Typography
            size="sm"
            className="text-baseLight inline-flex text-white"
          >
            {parts[0]}
          </Typography>
        )}
        <Typography
          tag="a"
          href={link}
          title={linkTitle}
          target="_blank"
          size="sm"
          className={clsx(
            'text-baseLight text-white underline hover:text-white',
            {
              'mx-1': parts[0] && parts[1],
              'ml-1': parts[0] && !parts[1],
              'mr-1': !parts[0],
            }
          )}
        >
          {linkTitle}
        </Typography>
        {parts[1] && (
          <Typography
            size="sm"
            className="text-baseLight inline-flex text-white"
          >
            {parts[1]}
          </Typography>
        )}
      </>
    );
  }

  return (
    <Typography size="sm" className="text-baseLight inline-flex text-white">
      {text}
    </Typography>
  );
};

export default PromoText;
