import { Dispatch, SetStateAction } from "react";

interface Props {
  operation: string;
  setOpenCategoryPopUp?: Dispatch<SetStateAction<boolean>>;
  setOpenEditCategoryPopup?: Dispatch<SetStateAction<boolean>>;
}
const CategoryPopUp = ({
  operation,
  setOpenCategoryPopUp,
  setOpenEditCategoryPopup,
}: Props) => {
  return (
    <div
      onClick={() => {
        setOpenEditCategoryPopup && setOpenEditCategoryPopup(false);
        setOpenCategoryPopUp && setOpenCategoryPopUp(false);
      }}
      className="bg-black/10 h-screen w-screen absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-[10px] border border-[#CACACA] w-[350px] sm:w-[540px] h-[530px] sm:h-[580px] flex relative"
      >
        <img
          src="/cross.png"
          alt="cross"
          className="w-[12px] h-[12px] absolute right-4 top-4 cursor-pointer"
          onClick={() => {
            setOpenCategoryPopUp && setOpenCategoryPopUp(false);
            setOpenEditCategoryPopup && setOpenEditCategoryPopup(false);
          }}
        />
        <div className="sm:w-[400px] w-[300px] m-auto flex flex-col gap-8 sm:gap-10">
          <div>
            <h1 className="text-[#0E9F6EB2] text-[20px] sm:text-[24px] font-semibold text-center">
              {operation} Category
            </h1>
            <p className="text-[12px] text-[#787878] max-sm:mt-1">
              {operation} your product category and necessary information from
              here
            </p>
          </div>
          <div>
            <h2 className="text-[#313131] text-[15px] font-semibold">
              Category Icon
            </h2>
            <div className="mt-1 border border-[#CACACA] border-dashed w-full flex flex-col items-center justify-center h-[180px]">
              <img
                src="/gallery-add.png"
                alt="add"
                className="w-[24px] h-[24px]"
              />
              <p className="text-[#313131] text-[12px] font-bold mt-6">
                Drop your image here
              </p>
              <p className="text-[#787878] text-[12px] font-semibold">
                (Only *jpg and *png images will be accepted)
              </p>
            </div>
          </div>
          <div>
            <label
              htmlFor="name"
              className="text-[#313131] font-semibold text-[15px]"
            >
              Category name
            </label>
            <br />
            <input
              type="text"
              name="name"
              className="rounded-[5px] outline-none border-2 border-[#DEDEDE] w-full py-1 px-3 mt-1"
            />
          </div>
          <div className="flex justify-between">
            <button
              onClick={() => {
                setOpenCategoryPopUp && setOpenCategoryPopUp(false);
                setOpenEditCategoryPopup && setOpenEditCategoryPopup(false);
              }}
              className="sm:w-[180px] w-[120px] rounded-[5px] bg-[#F1F5F9] py-3 text-[#C90000] font-medium sm:text-[18px]"
            >
              Cancel
            </button>
            <button className="sm:w-[180px] w-[120px] rounded-[5px] bg-[#0E9F6E] py-3 text-white font-medium sm:text-[18px]">
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryPopUp;
