import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
// import NavItems from "./NavItems"
import MobileNav from "./MobileNav"

const HeaderBlackText = () => {
    return (
        <header className="w-full sticky-header bg-white absolute text-black">
          <div className="wrapper flex items-center align-middle justify-between">
            <Link href="/" className="w-36">
              <Image 
                src="/assets/icons/logo-black.svg" width={158} height={38}
                alt="MANAGE Logo"
              />
            </Link>
            <nav className="md:flex-between w-fit align-middle max-w-xs">
                <Link href="/contents/about">
                    <p className="p-medium-14 hover:underline cursor-pointer">About MANAGE</p>
                </Link>
            </nav>
            {/* <div className="flex w-32 justify-end gap-3">
                <MobileNav />
            </div> */}
          </div>
    </header>
  )
}

export default HeaderBlackText