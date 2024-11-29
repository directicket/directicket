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
// import NavItems from "./NavItems"
  
const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
            <Image
              src="/assets/icons/notify-cart-black.svg"
              alt="menu button"
              width={24}
              height={24}
              className="cursor-pointer"
            />
        </SheetTrigger>
        <SheetContent className="w-full flex flex-col gap-6 bg-white md:hidden">
            <Image
              src="/assets/icons/notify-cart-black.svg"
              alt="menu button"
              width={1000}
              height={1000}
              className="cursor-pointer"
            />
            <Separator className="border border-gray-50" />
            <li></li>
        </SheetContent>
      </Sheet>

    </nav>
  )
}

export default MobileNav