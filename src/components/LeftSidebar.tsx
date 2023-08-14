import { BiHomeCircle, BiUser } from "react-icons/bi";
import { HiOutlineHashtag } from "react-icons/hi";
import {
  BsBell,
  BsBookmark,
  BsEnvelope,
  BsThreeDots,
  BsTwitter,
} from "react-icons/bs";
import Link from "next/link";

const NEVIGATION_ITEMS = [
  {
    title: "Twitter",
    icon: BsTwitter,
  },
  {
    title: "Home",
    icon: BiHomeCircle,
  },
  {
    title: "Explore",
    icon: HiOutlineHashtag,
  },
  {
    title: "Notifications",
    icon: BsBell,
  },
  {
    title: "Messeges",
    icon: BsEnvelope,
  },
  {
    title: "Bookmarks",
    icon: BsBookmark,
  },
  {
    title: "Profile",
    icon: BiUser,
  },
];

const LeftSideBar = () => {
  return (
    <section className="w-[23%] sticky top-0 flex flex-col items-stretch h-screen">
      <div className="flex flex-col items-stretch h-full space-y-4 my-4">
        {NEVIGATION_ITEMS.map((item) => (
          <Link
            className="hover:bg-white/10 text-2xl transition duration-200 flex items-center 
                  justify-start w-fit space-x-4 rounded-3xl py-2 px-6"
            href={`/${item.title.toLowerCase()}`}
            key={item.title}
          >
            <div>
              <item.icon />
            </div>
            {item.title !== "Twitter" ? <div>{item.title}</div> : <></>}
          </Link>
        ))}
        <button
          className="rounded-full m-4 bg-primary p-4 text-2xl text-center 
          hover:bg-opacity-70 transi duration-200"
        >
          Tweet
        </button>
      </div>
      <button
        className="rounded-full flex items-center justify-between space-x-2 bg-transparent p-4 text-center 
          hover:bg-white/20 transi duration-200 w-full"
      >
        <div className="flex items-center space-x-2">
          <div className="rounded-full bg-slate-400 w-10 h-10 "></div>
          <div className="text-left text-sm">
            <div className="font-semibold">Club of coders</div>
            <div className="">@clunofcoaderscom</div>
          </div>
        </div>
        <div>
          <BsThreeDots />
        </div>
      </button>
    </section>
  );
};

export default LeftSideBar;
