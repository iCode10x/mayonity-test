import { categoriesData } from "../utils/CategoriesData.ts";
import CategoryElement from "./CategoryElement.tsx";
import { CategoryElementType } from "../Types.ts";
const CategoriesList = () => {
  return (
    <div className="rounded-[7px] border border-[#CACACA] mt-6">
      <div className="grid grid-cols-4 sm:grid-cols-6 gap-[30px] px-2 sm:gap-[100px] py-3 sm:px-10">
        <div className="flex gap-1">
          <span className="text-[#313131] text-[13px] font-medium">Id</span>
          <img src="/arrows.png" alt="" className="w-[13px] h-[17px]" />
        </div>
        <div className="flex gap-1 sm:w-[150px]">
          <span className="text-[#313131] text-[13px] font-medium">
            Category Name
          </span>
          <img src="/arrows.png" alt="" className="w-[13px] h-[17px]" />
        </div>
        <div className="flex gap-1 sm:w-[150px]">
          <span className="text-[#313131] text-[13px]   font-medium">
            No of Products
          </span>
          <img src="/arrows.png" alt="" className="w-[13px] h-[17px]" />
        </div>
        <div className=" gap-1 hidden sm:flex w-[150px]">
          <span className="text-[#313131] text-[13px] font-medium">
            Added on
          </span>
          <img src="/arrows.png" alt="" className="w-[13px] h-[17px]" />
        </div>
        <div className="flex gap-1">
          <span className="text-[#313131] text-[13px] font-medium">Status</span>
          <img src="/arrows.png" alt="" className="w-[13px] h-[17px]" />
        </div>
        {/*<div className="flex gap-1" />*/}
      </div>
      <div>
        {categoriesData.map((item: CategoryElementType, index: number) => (
          <CategoryElement key={index} {...item} index={index + 1} />
        ))}
      </div>
    </div>
  );
};
export default CategoriesList;
