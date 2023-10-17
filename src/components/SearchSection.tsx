import { useState } from "react";
import CategoryPopUp from "./CategoryPopUp.tsx";
const SearchSection = () => {
  const [openCategoryPopUp, setOpenCategoryPopUp] = useState(false);

  return (
    <div>
      <div className="bg-white p-5 flex flex-col sm:flex-row gap-5 border border-[#CACACA]/50 rounded-[6px] ">
        <input
          type="text"
          className="w-full outline-none border bg-[#F9FAFB] rounded-[5px] py-2 px-4"
          placeholder="Search Category"
        />
        <button className="flex gap-2 items-center py-2 sm:w-[350px] text-white bg-[#0E9F6E] justify-center rounded-[5px]">
          <img src="/search.png" alt="search" className="w-[13px] h-[13px]" />
          <span className="text-[13px]">Search</span>
        </button>
        <button
          onClick={() => setOpenCategoryPopUp(true)}
          className="flex gap-2 items-center py-2 sm:w-[350px] text-white bg-[#0E9F6E] justify-center rounded-[5px]"
        >
          <span>+</span>
          <span className="text-[13px]">Add category</span>
        </button>
      </div>
      {openCategoryPopUp && (
        <div className="">
          <CategoryPopUp
            operation="Add"
            setOpenCategoryPopUp={setOpenCategoryPopUp}
          />
        </div>
      )}
    </div>
  );
};
export default SearchSection;
