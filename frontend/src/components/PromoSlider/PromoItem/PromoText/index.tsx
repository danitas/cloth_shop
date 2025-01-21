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
    const [textLeft, textRight] = text.split('{0}');

    return (
      <>
        {textLeft && (
          <Typography
            size="sm"
            className="text-baseLight inline-flex text-white"
          >
            {textLeft}
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
              'mx-1': textLeft && textRight,
              'ml-1': textLeft && !textRight,
              'mr-1': !textLeft,
            }
          )}
        >
          {linkTitle}
        </Typography>
        {textRight && (
          <Typography
            size="sm"
            className="text-baseLight inline-flex text-white"
          >
            {textRight}
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
