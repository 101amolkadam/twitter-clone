import { AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";
import { IoShareOutline, IoStatsChart } from "react-icons/io5";
import { BsChat, BsDot, BsThreeDots } from "react-icons/bs";

const MainComponent = () => {
  return (
    <main
          className="flex w-[70%] ml-2 h-full min-h-screen flex-col border-l-[0.5px] 
        border-r-[0.5px] border-gray-600"
        >
          <h1 className="text-xl font-bold p-6 backdrop-blur bg-black/10 sticky top-0">
            Home
          </h1>
          <div className=" border-t-[0.5px] border-b-[0.5px] flex items-stretch p-4 space-x-2 border-gray-600 relative">
            <div className="w-10 h-10 bg-slate-400 rounded-full flex-none"></div>
            <div className="flex flex-col w-full h-full">
              <input
                className="w-full h-full text-2xl placeholder:text-gray-600 bg-transparent outline-none border-none border-b-[0.5px] border-gray-600 p-4"
                type="text"
                placeholder="what's happening?"
              />
              <div className="flex w-full justify-between items-center">
                <div></div>
                <div className="w-full max-w-[100px]">
                  <button
                    className="rounded-full bg-primary px-4 py-2 w-full text-lg text-center 
                      hover:bg-opacity-70 transi duration-200 font-bold"
                  >
                    Tweet
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="border-b-[0.5px] border-gray-600 p-2 flex space-x-4"
              >
                <div>
                  <div className="w-10 h-10 bg-slate-200 rounded-full" />
                </div>
                <div className="felx flex-col">
                  <div className="flex items-center w-full justify-between">
                    <div className="flex items-center space-x-1 w-full">
                      <div className="font-bold">Club of Coaders</div>
                      <div className="text-gray-500">@clubofcoaders</div>
                      <div className="text-gray-500">
                        <BsDot />
                      </div>
                      <div className="text-gray-500">1 hour ago</div>
                    </div>
                    <div>
                      <BsThreeDots />
                    </div>
                  </div>
                  <div className="text-white text-base">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Harum sit nihil vel illum hic omnis magni beatae veniam
                    voluptate. Laudantium quam corporis obcaecati voluptate
                    excepturi.
                  </div>
                  <div className="bg-slate-400 aspect-square w-full h-80 rounded-xl mt-2"></div>
                  <div className="flex items-center justify-start space-x-20 mt-2 w-full">
                    <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                      <BsChat />
                    </div>
                    <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                      <AiOutlineRetweet />
                    </div>
                    <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                      <AiOutlineHeart />
                    </div>
                    <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                      <IoStatsChart />
                    </div>
                    <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                      <IoShareOutline />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
  )
}

export default MainComponent