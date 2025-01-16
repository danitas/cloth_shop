import PromoText from './PromoText';
import PromoLink from './PromoLink';

type PromoItemProps = {
  text: string;
  link?: string;
  linkTitle?: string;
};

const PromoItem = ({ text, link, linkTitle }: PromoItemProps) => {
  return (
    <>
      <PromoText text={text} link={link} linkTitle={linkTitle} />
      {!text.includes('{0}') && <PromoLink link={link} linkTitle={linkTitle} />}
    </>
  );
};

export default PromoItem;
