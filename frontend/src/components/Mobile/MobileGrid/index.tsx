import React, { useState } from 'react';
import { Columns2, Square } from 'lucide-react';

const MobileGrid = () => {
  const [isColumnLayout, setIsColumnLayout] = useState(true);

  const handleLayoutChange = (isColumn: boolean) => {
    setIsColumnLayout(isColumn);
  };

  return (
    <div className="flex justify-between gap-2 lg:hidden">
      <label className="flex items-center">
        <input
          type="radio"
          name="layout"
          checked={isColumnLayout}
          onChange={() => {
            handleLayoutChange(true);
          }}
          className="hidden"
        />
        <Columns2
          width="20"
          height="20"
          className={isColumnLayout ? 'text-black' : 'text-gray-400'}
        />
      </label>

      <label className="flex cursor-pointer items-center">
        <input
          type="radio"
          name="layout"
          checked={!isColumnLayout}
          onChange={() => {
            handleLayoutChange(false);
          }}
          className="hidden"
        />
        <Square
          width="20"
          height="20"
          className={!isColumnLayout ? 'text-black' : 'text-gray-400'}
        />
      </label>
    </div>
  );
};

export default MobileGrid;
