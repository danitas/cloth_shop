import Typography from '@shared/Typography';
import { TSubcategory } from '@src/api/subcategories.ts';

type TCategoryFilterSliderProps = {
  subcategories: TSubcategory[];
};

const CategoryFilterSlider = ({
  subcategories,
}: TCategoryFilterSliderProps) => {
  console.log('subcategories');
  console.log(subcategories);
  return (
    <>
      <div className="max-w-auto flex w-full cursor-pointer flex-nowrap overflow-x-auto overflow-y-clip py-6 lg:w-auto">
        {subcategories.map((subcategory) => (
          <div
            key={subcategory._id}
            className="flex flex-shrink-0 flex-col pr-4 last:pr-0"
          >
            <img
              src={`/src/assets/images/category/${subcategory.image}`}
              alt={subcategory.name}
              className="w-[128px] lg:w-[254px]"
            />
            <Typography tag="h3" className="mt-3" size="sm">
              {subcategory.name}
            </Typography>
          </div>
        ))}
      </div>
    </>
  );
};

export default CategoryFilterSlider;
