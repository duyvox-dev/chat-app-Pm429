import React from "react";
import { FaSearch } from "react-icons/fa";
import Conversation from "./Conversation";
const SearchBox = () => {
    return (
        <div className="relative">
            <input
                type="text"
                className="block w-full rounded-md bg-darkestBlue bg-dark-100 outline-0 border border-transparent pl-3 pr-12 py-2  mt-2 focus:border focus:border-dark-50  text-gray-300  box-border placeholder:text-gray-400 "
                placeholder="Search for user"
            />
            <FaSearch className="absolute top-1/2 -translate-y-[25%] right-5 text-dark-50 "></FaSearch>
        </div>
    );
};
export default function UserChatSection() {
    const conversationList = [
        {
            image: "https://cdn.longkhanhpets.com/2019/08/tam-ly-loai-meo-1.jpg",
            name: "End Game",
            chat: "Day la lan cuoi eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee ",
        },
        {
            image: "https://cdn.longkhanhpets.com/2019/08/tam-ly-loai-meo-1.jpg",
            name: "End Game",
            chat: "tau se end game  ",
        },
        {
            image: "https://cdn.longkhanhpets.com/2019/08/tam-ly-loai-meo-1.jpg",
            name: "End Game",
            chat: "Day la lan cuoi  ",
        },
        {
            image: "https://cdn.longkhanhpets.com/2019/08/tam-ly-loai-meo-1.jpg",
            name: "End Game",
            chat: "tau se end game  ",
        },
        {
            image: "https://cdn.longkhanhpets.com/2019/08/tam-ly-loai-meo-1.jpg",
            name: "End Game",
            chat: "Day la lan cuoi  ",
        },
        {
            image: "https://cdn.longkhanhpets.com/2019/08/tam-ly-loai-meo-1.jpg",
            name: "End Game",
            chat: "tau se end game  ",
        },
        {
            image: "https://cdn.longkhanhpets.com/2019/08/tam-ly-loai-meo-1.jpg",
            name: "End Game",
            chat: "Day la lan cuoi  ",
        },
        {
            image: "https://cdn.longkhanhpets.com/2019/08/tam-ly-loai-meo-1.jpg",
            name: "End Game",
            chat: "tau se end game  ",
        },
        {
            image: "https://cdn.longkhanhpets.com/2019/08/tam-ly-loai-meo-1.jpg",
            name: "End Game",
            chat: "Day la lan cuoi  ",
        },
        {
            image: "https://cdn.longkhanhpets.com/2019/08/tam-ly-loai-meo-1.jpg",
            name: "End Game",
            chat: "tau se end game  ",
        },
        {
            image: "https://cdn.longkhanhpets.com/2019/08/tam-ly-loai-meo-1.jpg",
            name: "End Game",
            chat: "Day la lan cuoi  ",
        },
        {
            image: "https://cdn.longkhanhpets.com/2019/08/tam-ly-loai-meo-1.jpg",
            name: "End Game",
            chat: "tau se end game  ",
        },
    ];

    return (
        <div className="md:w-[25vw] w-[30vw] border-r-[1px] border-gray-700 p-6 h-screen flex flex-col">
            <h2 className="text-2xl text-slate-200 font-semibold mb-5">
                Chats
            </h2>
            <SearchBox />
            <h3 className="text-xl text-slate-200 font-semibold my-5">
                Recent chats
            </h3>
            <div
                className="flex gap-3  flex-col overflow-y-scroll scrollbar-hide"
                style={{}}
            >
                {conversationList.map((conversation) => {
                    return <Conversation data={conversation}></Conversation>;
                })}
            </div>
        </div>
    );
}
