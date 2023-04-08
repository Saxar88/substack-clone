import Image from "next/image";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

function Header() {
  return (
    <header className="relative flex flex-col justify-center p-4 md:h-[880px] bg-[#006f5c] text-white text-sm font-medium">
      <div className="absolute left-0 top-0 flex w-full px-4 py-3">
        <div className="flex items-center gap-6">
          <Image
            src={require("../public/logo.svg")}
            alt="logo"
            height={26}
            width={26}
          />
          <div className="flex items-center gap-2">
            <p>Resources</p>
            <ChevronDownIcon className="h-4 w-4" />
          </div>
          <div className="flex items-center gap-2">
            <p>Writers</p>
            <ChevronDownIcon className="h-4 w-4" />
          </div>
          <div className="flex items-center gap-2">
            <p>Readers</p>
            <ChevronDownIcon className="h-4 w-4" />
          </div>
        </div>
        <div className="flex grow shrink-0 justify-end items-center gap-3">
          <form className="relative opacity-75">
            <input
              type="text"
              placeholder="Search Substack..."
              className="hidden md:inline-block min-w-[255px] h-10 bg-transparent border rounded text-sm leading-5 indent-8"
            />
            <MagnifyingGlassIcon className="absolute left-3 top-3 h-4 w-4" />
          </form>
          <button className="px-4 py-2.5 border-none rounded-md bg-[#ff6719] hover:bg-[#ff5600] transition ease-in-out cursor-pointer">
            Start writing
          </button>
          <button className="px-4 py-2.5 border rounded-md bg-[#006f5c] hover:bg-emerald-900/30 transition ease-in-out cursor-pointer">
            Sign in
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center gap-14">
        <div className="flex flex-col w-4/12 gap-8 font-serif text-lg">
          <p className="text-6xl leading-[68px]">
            Do your best work, supported by your subscribers
          </p>
          <p>
            Substack lets independent writers and podcasters publish directly to
            their audience and get paid through subscriptions.
          </p>
          <div className="flex gap-3 font-sans">
            <button className="px-5 py-3 border-none rounded-md bg-[#ff6719] hover:bg-[#ff5600] transition ease-in-out cursor-pointer">
              Create your Substack
            </button>
            <button className="px-5 py-3 border rounded-md bg-[#006f5c] hover:bg-emerald-900/30 transition ease-in-out cursor-pointer">
              Find Substacks to read
            </button>
          </div>
        </div>
        <Image
          src={require("../public/hero_image.png")}
          alt="hero image"
          className="w-full min-w-[200px] max-w-xl shrink"
        />
      </div>
    </header>
  );
}

export default Header;
