import Link from "next/link"

const HeroSection = () => {
  return (
    <>
    <div className="flex-col flex items-center justify-center w-full h-[600px] md:h-[750px] lg:h-[850px] bg-white">
        {/* copywriting */}
        <h1 className="h1-medium w-full text-center align-middle pb-4">Ticketing, Remastered.</h1>
        <p className="text-gray-400 sm:w-96 md:w-96 p-medium-16 md:p-medium-18 text-center pb-4">
          Directicket makes tickets to your event more customizable, easier to manage, 
          and more profitable compared to other platforms. 
        </p>
        {/* copywriting */}

        {/* Button */}
        <div className="h-fit min-w-fit px-7 rounded-3xl p-3 bg-black cursor-pointer">
          <Link href="/community">
              <p className="p-medium-14 underline hover:no-underline text-white cursor-pointer">Get early access &rarr;</p>
          </Link>
        </div>
        {/* Button */}

    </div>
    </>
  )
}

export default HeroSection