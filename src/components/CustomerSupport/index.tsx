import { t } from 'i18next';
import classes from './style.module.scss';

const CustomerSupport = () => {
  return (
    <div className="footer-support-wrapper flex flex-col">
      <div className="footer-contact-title text-l uppercase">
        {t('footer_customer_support')}
      </div>
      <a href="tel:+380443337700" className={classes.footerContactPhone}>
        +380 (44) 333 77 00
      </a>
    </div>
  );
};

export default CustomerSupport;
