import { CategoryElementType } from "../Types.ts";
import CategoryPopUp from "./CategoryPopUp.tsx";
import { useState } from "react";
const CategoryElement = ({
  image,
  index,
  label,
  status,
  date,
  numOfProducts,
}: CategoryElementType) => {
  const [openEditCategoryPopup, setOpenEditCategoryPopup] = useState(false);
  return (
    <div>
      <div className="grid grid-cols-4 sm:grid-cols-6 sm:gap-[100px] py-2 sm:px-10 px-2  border-[#CACACA] border-t-[1px] items-center text-[13px] text-[#313131]  bg-white">
        <span className="text-[#313131]  font-normal">0{index && index}</span>
        <div className="flex gap-2 items-center">
          <img
            src={image}
            alt=""
            className="sm:w-[40px] sm:h-[40px] w-[30px] h-[30px] rounded-[10px]"
          />
          <span className="text-[13px]">{label}</span>
        </div>
        <span className="text-center">{numOfProducts}</span>
        <span className="w-[100px] hidden sm:block">{date}</span>

        <div
          className={`${
            status === "Enabled" ? "text-[#0E9F6E]" : "text-[#C90000]"
          } flex sm:flex-row flex-col gap-2 items-center  w-[100px]`}
        >
          <span className="font-semibold ">{status}</span>
          <div
            className={`bg-[#F1F5F9] rounded-[10px] w-[30px] h-[15px] border flex ${
              status === "Enabled" && "justify-end"
            }`}
          >
            <div
              className={`rounded-full h-[14px] w-[14px] ${
                status === "Enabled" ? "bg-[#0E9F6E]" : "bg-[#CACACA]"
              }`}
            />
          </div>
        </div>
        <div
          onClick={() => setOpenEditCategoryPopup(true)}
          className="hidden sm:flex justify-center items-center w-[70px] h-[28px] bg-[#404EED]/20 rounded-[14px]"
        >
          <img src="/edit-2.png" alt="edit" className="w-[17px] h-[17px]" />
        </div>
      </div>
      {openEditCategoryPopup && (
        <div>
          <CategoryPopUp
            operation="Edit"
            setOpenEditCategoryPopup={setOpenEditCategoryPopup}
          />
        </div>
      )}
    </div>
  );
};
export default CategoryElement;
