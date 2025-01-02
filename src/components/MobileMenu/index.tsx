import Sidebar from '@components/Sidebar';
import MobileHeader from '@components/MobileHeader';

const MobileMenu = () => {
  return (
    <div className="flex lg:hidden">
      <MobileHeader />

      <Sidebar />
    </div>
  );
};

export default MobileMenu;
