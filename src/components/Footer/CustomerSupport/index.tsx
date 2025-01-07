import { t } from 'i18next';
import classes from './style.module.scss';
import Typography from '@shared/Typography';

const CustomerSupport = () => {
  return (
    <div className="footer-support-wrapper flex flex-col">
      <Typography uppercase className="footer-contact-title">
        {t('footer_customer_support')}
      </Typography>

      <Typography
        tag="a"
        href="tel:+380443337700"
        className={classes.footerContactPhone}
      >
        +380 (44) 333 77 00
      </Typography>
    </div>
  );
};

export default CustomerSupport;
