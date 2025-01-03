import gpay from '@assets/images/icons/g_pay.svg';
import visa from '@assets/images/icons/visa.svg';
import mastercard from '@assets/images/icons/mastercard.svg';

const FooterPay = () => {
  return (
    <div className="footer_pay flex gap-5">
      <img
        src={gpay}
        width="44"
        alt="Payment with Google Pay"
        className="flex"
      />
      <img
        src={visa}
        width="41"
        alt="Payment by Visa credit card"
        className="flex"
      />
      <img
        src={mastercard}
        width="34"
        alt="Payment by Mastercard credit card"
        className="flex"
      />
    </div>
  );
};

export default FooterPay;
