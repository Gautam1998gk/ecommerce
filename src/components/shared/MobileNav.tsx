import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import Image from "next/image"
  import { Separator } from "../ui/separator"
  //import NavItems from "./NavItems"
  import { FaBars } from "react-icons/fa6";
import { NavigationMenuDemo } from "./NavItems";
  
  
  const MobileNav = () => {
    return (
      <nav className="lg:hidden">
        <Sheet key="left">
          <SheetTrigger className="align-middle">

            <FaBars size="26px"/>
          </SheetTrigger>
          <SheetContent className="flex flex-col gap-6 bg-white lg:hidden" side="left">
            <Image 
              src="https://nest-frontend.netlify.app/assets/imgs/theme/logo.svg"
              alt="logo"
              width={128}
              height={38}
            />
            <Separator className="border border-gray-100" />
            <NavigationMenuDemo />
          </SheetContent>
        </Sheet>
      </nav>
    )
  }
  
  export default MobileNav