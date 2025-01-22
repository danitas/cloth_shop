import { Menu } from 'lucide-react';
import Button from '../../shared/Button';
import { useSidebarContext } from '@context/SidebarContext.tsx';

const BurgerMobileButton = () => {
  const { toggle } = useSidebarContext();

  return (
    <Button variant="ghost" size="icon" onClick={toggle}>
      <Menu />
    </Button>
  );
};

export default BurgerMobileButton;
