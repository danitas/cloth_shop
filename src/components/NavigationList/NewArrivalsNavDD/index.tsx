import ROUTES from '@src/router.tsx';
import { useNavigate } from 'react-router';
import Typography from '@shared/Typography';

type TImage = {
  imgSource: string;
};

const NewArrivalsNavDD = ({ imgSource }: TImage) => {
  const navigate = useNavigate();

  const handleClick = (url: string) => () => {
    navigate(url);
  };

  return (
    <div className="children-menu-banner group flex flex-col">
      <div
        className="mt-4 flex cursor-pointer flex-col"
        onClick={handleClick(ROUTES.NEW_ARRIVALS)}
      >
        <div className="overflow-hidden">
          <img
            src={imgSource}
            alt="NewArrivalsNavDD"
            className="h-auto w-full transform transition-transform duration-1000 group-hover:scale-110"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <Typography
            tag="p"
            className="hover:text-black hover:underline"
            size="sm"
          >
            NEW
          </Typography>
          <Typography tag="p" className="underline hover:text-black" size="sm">
            to go
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default NewArrivalsNavDD;
