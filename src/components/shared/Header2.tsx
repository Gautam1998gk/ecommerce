import Image from "next/image";
import Link from "next/link";
import  { Filter } from "./SearchbarFilter";
import /* NavItems, */ { NavigationMenuDemo } from "./NavItems";
import { MdOutlineHeadsetMic } from "react-icons/md";

const Header2 = () => {
  return (
    <header className="w-full border-b hidden lg:block sticky  top-0 z-50 bg-white ">
      <div className="flex-between wrapper">
        <div className="flex gap-5 items-center">
          <Filter/>
          <div className="lg:flex-between gap-1 hidden w-[700px] ">
            <NavigationMenuDemo />
          </div>
        </div>
        <div className="flex justify-end items-center gap-3 ">
        <MdOutlineHeadsetMic size="36" />
        <div >
        <span className=" text-green-500 font-extrabold text-xl "> 1900 - 888</span>
        <p>  24/7 Support Center</p>
        </div>
        </div>
      </div>
    </header>
  );
};

export default Header2;
