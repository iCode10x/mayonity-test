import { SidebarLinks } from "../utils/SidebarLinks.ts";
import { SidebarLinkType } from "../Types.ts";
import { Dispatch, SetStateAction, useState } from "react";
import { SettingsOptions } from "../utils/SettingsOptions.ts";
const Sidebar = ({
  showClose,
  setShowSidebar,
}: {
  showClose?: boolean;
  setShowSidebar?: Dispatch<SetStateAction<boolean>>;
}) => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  return (
    <div className="flex  w-[250px] sm:w-[300px] h-screen py-7 px-10  flex-col items-start font-poppins relative">
      {showClose && (
        <img
          src="/cross.png"
          alt="cross"
          className="w-[16px] h-[16px] absolute top-7 right-4"
          onClick={() => {
            setShowSidebar && setShowSidebar(false);
          }}
        />
      )}
      <h1 className="font-poppins font-bold text-[28px] text-[#111827]">
        EZ RENT
      </h1>
      <div className="mt-12 flex flex-col gap-6">
        {SidebarLinks.map((item: SidebarLinkType, index: number) => (
          <div key={index} className="flex items-center gap-3 cursor-pointer">
            <img src={item.icon} alt="icon" className="w-[18px] h-[18px]" />
            <span
              className={`text-[#787878] text-[14px] ${
                index === 2 && "text-[#0E9F6E]"
              }`}
            >
              {item.label}
            </span>
          </div>
        ))}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => setSettingsOpen((prev) => !prev)}
        >
          <img src="/setting-2.png" alt="icon" className="w-[20px] h-[20px]" />
          <span className="text-[#787878] text-[15px]">Settings</span>
          <img src="/arrow-down.png" alt="icon" className="w-[20px] h-[20px]" />
        </div>
        {settingsOpen && (
          <div className="flex flex-col gap-3 -mt-2 ml-9">
            {SettingsOptions.map((item: SidebarLinkType, index: number) => (
              <div
                key={index}
                className="flex items-center gap-2 cursor-pointer"
              >
                <img src={item.icon} alt="icon" className="w-[20px] h-[20px]" />
                <span className="text-[#787878] text-[15px]">{item.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default Sidebar;
