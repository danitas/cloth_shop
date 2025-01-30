import MobileNavigation from './MobileNavigation';
import DesktopNavigation from './DesktopNavigation';
import useScreenSize from '@hooks/useScreenSize.ts';

const NavigationList = () => {
  const { isLgUp } = useScreenSize();

  return isLgUp ? <DesktopNavigation /> : <MobileNavigation />;
};

export default NavigationList;
