import React, { useState } from "react";

export type FilterOption = "all" | "treks" | "expeditions" | "yoga";

interface FilterTabsProps {
  onFilterChange: (filter: FilterOption) => void;
  initialFilter?: FilterOption;
}

export const FilterTabs: React.FC<FilterTabsProps> = ({ 
  onFilterChange, 
  initialFilter = "all" 
}) => {
  const [activeFilter, setActiveFilter] = useState<FilterOption>(initialFilter);

  const handleFilterChange = (filter: FilterOption) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className="self-center flex items-center text-sm text-[rgba(1,124,109,1)] font-normal leading-none justify-center mt-[41px] max-md:mt-10">
      <button
        onClick={() => handleFilterChange("all")}
        className={`self-stretch min-h-[30px] gap-2.5 px-5 py-[5px] rounded-[10px_0px_0px_10px] border-[rgba(1,124,109,1)] border-solid border ${
          activeFilter === "all"
            ? "bg-[rgba(1,124,109,1)] text-white"
            : "bg-transparent"
        }`}
      >
        All
      </button>
      <button
        onClick={() => handleFilterChange("treks")}
        className={`self-stretch min-h-[30px] gap-2.5 whitespace-nowrap px-5 py-[5px] border-[rgba(1,124,109,1)] border-t border-b ${
          activeFilter === "treks"
            ? "bg-[rgba(1,124,109,1)] text-white"
            : "bg-transparent"
        }`}
      >
        Treks
      </button>
      <button
        onClick={() => handleFilterChange("expeditions")}
        className={`self-stretch min-h-[30px] gap-2.5 whitespace-nowrap px-5 py-[5px] border-[rgba(1,124,109,1)] border-solid border ${
          activeFilter === "expeditions"
            ? "bg-[rgba(1,124,109,1)] text-white"
            : "bg-transparent"
        }`}
      >
        Expeditions
      </button>
      <button
        onClick={() => handleFilterChange("yoga")}
        className={`self-stretch min-h-[30px] gap-2.5 px-5 py-[5px] rounded-[0px_10px_10px_0px] border-[rgba(1,124,109,1)] border-t border-r border-b ${
          activeFilter === "yoga"
            ? "bg-[rgba(1,124,109,1)] text-white"
            : "bg-transparent"
        }`}
      >
        Yoga Retreat
      </button>
    </div>
  );
};