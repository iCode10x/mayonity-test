import Sidebar from "./Sidebar.tsx";
import { BsJustify } from "react-icons/bs";
import { useState } from "react";
const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="p-5 flex items-center font-poppins relative">
      <div className="block sm:hidden">
        <button onClick={() => setShowSidebar(true)}>
          <BsJustify size={20} />
        </button>
      </div>
      <div className="flex items-center gap-6 justify-end w-full">
        <p className=" text-[#313131]/40 text-[18px] font-semibold">Hi John</p>
        <button className="bg-[#0E9F6E] py-3 px-6  sm:px-12 rounded-[7px] flex items-center gap-2">
          <img src="/logout.png" alt="logout" className="w-[16px] h-[16px]" />
          <span className="text-white text-[13px]">Logout</span>
        </button>
      </div>
      {showSidebar && (
        <div className="absolute left-0 top-0 bg-white">
          <Sidebar showClose={true} setShowSidebar={setShowSidebar} />
        </div>
      )}
    </div>
  );
};
export default Navbar;
