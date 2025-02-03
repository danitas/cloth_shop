import clsx from 'clsx';
import { useProductContext } from '@context/ProductContext.tsx';

const Pagination = () => {
  const { setActivePage, pageArray, activePage, totalPages } =
    useProductContext();

  const handleActivePage = (pageNumber: number) => () => {
    setActivePage(pageNumber);
  };

  if (totalPages <= 1) return null;
  return (
    <ul className="w-100 my-4 flex justify-center gap-4">
      {pageArray.map((pageNumber) => (
        <li key={pageNumber}>
          <button
            type="button"
            onClick={handleActivePage(pageNumber)}
            className={clsx(
              'focus:border-gray-100 hover:border-gray-100 border-gray-100 flex h-[35px] w-[35px] items-center justify-center rounded-[50%] px-3 text-large text-gray-400 hover:bg-gray-200 hover:text-white',
              activePage === pageNumber &&
                'pointer-events-none bg-gray-300 text-white'
            )}
          >
            {pageNumber}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
