import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
// import NavItems from "./NavItems"
import MobileNav from "./MobileNav"

const Header = () => {
    return (
        <div className="w-full sticky-header border-b pb-[-20] bg-white bg-opacity-90 header-blur absolute text-black">
          <div className="wrapper flex items-center align-middle justify-between py-[-20]">
            <Link href="/" className="w-36">
              <Image 
                src="/assets/images/logo.svg" width={110} height={38}
                alt="Directicket Logo"
              />
            </Link>
            <nav className="md:flex-between w-fit max-w-xs">
              <div className="h-fit min-w-fit px-3 rounded-3xl p-1 bg-black cursor-pointer">
                <Link href="/community">
                    <p className="p-medium-12 text-white cursor-pointer">Try now</p>
                </Link>
              </div>
            </nav>
            {/* <div className="flex w-32 justify-end gap-3">
                <MobileNav />
            </div> */}
          </div>
    </div>
  )
}

export default Header