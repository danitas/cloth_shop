import ROUTES from '@src/router.tsx';

type TImage = {
  imgSource: string;
};

const NewArrivalsNavDD = ({ imgSource }: TImage) => {
  return (
    <div className="children-menu-banner group flex flex-col">
      <a className="flex flex-col" href={ROUTES.NEW_ARRIVALS}>
        <div className="mt-4 flex justify-between">
          <div className="overflow-hidden">
            <img
              src={imgSource}
              alt="NewArrivalsNavDD"
              className="h-auto w-full transform transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="mt-4 flex justify-between">
              <p className="flex text-black hover:text-black hover:underline">
                NEW
              </p>
              <p className="flex text-black underline hover:text-black">
                to go
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default NewArrivalsNavDD;
