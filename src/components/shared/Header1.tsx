import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { IoIosGitCompare } from "react-icons/io";
import { RiAccountCircleLine } from "react-icons/ri";
import SearchbarFilter from "./SearchbarFilter";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="flex-between wrapper">
        <MobileNav />
        <div className="flex gap-10 items-center">
        <Link href="/" className="w-36">
          <Image
            width={128}
            height={32}
            alt="logo"
            src="https://nest-frontend.netlify.app/assets/imgs/theme/logo.svg"
          />
        </Link>

        <nav className="lg:flex-between hidden py-1 px-4 border-green-400 border-2 rounded-md">
          <SearchbarFilter />
        </nav>
        </div>
        <div className="flex w-32 justify-end gap-3">
          <Link
            href="/compare"
            className="flex gap-3 align-bottom max-lg:hidden"
          >
            <IoIosGitCompare size="26px" />{" "}
            <span className="max-xl:hidden">Compare</span>
          </Link>
          <Link href="/wishlist" className="flex gap-3 align-bottom">
            <FaRegHeart size="26px" />{" "}
            <span className="max-xl:hidden">Wishlist</span>
          </Link>
          <Link href="/cart" className="flex gap-3 align-bottom">
            <IoCartOutline size="26px" />{" "}
            <span className="max-xl:hidden">Cart</span>
          </Link>
          <Link
            href="/account"
            className="flex gap-3 align-bottom max-lg:hidden"
          >
            <RiAccountCircleLine size="26px" />{" "}
            <span className="max-xl:hidden">Account</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
