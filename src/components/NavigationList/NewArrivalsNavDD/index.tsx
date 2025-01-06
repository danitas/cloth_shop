import ROUTES from '@src/router.tsx';

type TImage = {
  imgSource: string;
};

const NewArrivalsNavDD = ({ imgSource }: TImage) => {
  return (
    <div className="children-menu-banner flex flex-col">
      <a className="flex flex-col" href={ROUTES.NEW_ARRIVALS}>
        <img
          src={imgSource}
          alt="NewArrivalsNavDD"
          className="flex h-auto w-full"
        />
        <div className="mt-4 flex justify-between">
          <p className="text-black hover:text-black hover:underline">NEW</p>
          <p className="text-black underline hover:text-black">to go</p>
        </div>
      </a>
    </div>
  );
};

export default NewArrivalsNavDD;
