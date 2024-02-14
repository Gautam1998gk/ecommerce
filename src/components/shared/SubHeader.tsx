import { MdOutlineHeadsetMic } from "react-icons/md";
import SubNavItems from "./SubNavItems";
import DropdownHover, { DropdownHoverCurrency } from "./DropdownHover";

const SubHeader = () => {
  return (
    <header className="w-full border-b hidden lg:block">
      <div className="flex-between">
        <nav className="lg:flex-between hidden">
          <SubNavItems />
        </nav>
        <div className="flex justify-end items-center gap-3">
        <p className="p-small-10 px-2 border-r-2">Need help? Call Us + 1800 900</p>
       < DropdownHover/>
       < DropdownHoverCurrency/>
        </div>
      </div>
    </header>
  );
};

export default SubHeader;
