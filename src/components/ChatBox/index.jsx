import React from "react";
import profileDefault from "../../assets/images/profile_default.jpg";
import { FiChevronsRight, FiImage, FiLink } from "react-icons/fi";
import MessageList from "./MessageList";
export default function ChatSection() {
    const messageList = [
        {
            detail: "Accusamus sit sequi voluptatum aut vitae consectetur maxime voluptas praesentium.",
            image: "https://yt3.ggpht.com/cWNkg93oYga0W5Bosdb5Bb-A6Kq1etuzEGJyYZGTFjyuW5SgdDccdmJiR8K9-QjKHG_B0bnIXQ=s900-c-k-c0x00ffffff-no-rj",

            id: "1",
        },
        {
            detail: "Excepturi sunt error corrupti qui quidem repellat.",
            image: "https://yt3.ggpht.com/cWNkg93oYga0W5Bosdb5Bb-A6Kq1etuzEGJyYZGTFjyuW5SgdDccdmJiR8K9-QjKHG_B0bnIXQ=s900-c-k-c0x00ffffff-no-rj",
            id: "2",
        },
        {
            detail: "Nihil omnis consequatur earum saepe quas dolorem nostrum.",
            image: "http://loremflickr.com/640/480/technics",
            id: "3",
        },
        {
            detail: "Excepturi repudiandae fuga.",
            image: "http://loremflickr.com/640/480/animals",
            id: "4",
        },
        {
            detail: "Omnis voluptate qui fugiat.",
            image: "http://loremflickr.com/640/480/sports",
            id: "5",
        },
        {
            detail: "In deleniti dolorum voluptatibus voluptates deserunt quisquam id.",
            image: "http://loremflickr.com/640/480/business",
            id: "6",
        },
        {
            detail: "Officiis suscipit vel recusandae a et error.",
            image: "http://loremflickr.com/640/480/animals",
            id: "7",
        },
        {
            detail: "Placeat voluptate animi velit expedita eum.",
            image: "http://loremflickr.com/640/480/transport",
            id: "8",
        },
        {
            detail: "Sint labore maiores deserunt.",
            image: "https://yt3.ggpht.com/cWNkg93oYga0W5Bosdb5Bb-A6Kq1etuzEGJyYZGTFjyuW5SgdDccdmJiR8K9-QjKHG_B0bnIXQ=s900-c-k-c0x00ffffff-no-rj",
            id: "9",
        },
        {
            detail: "Eligendi nostrum facilis qui vel labore rem accusamus ut.",
            image: "https://yt3.ggpht.com/cWNkg93oYga0W5Bosdb5Bb-A6Kq1etuzEGJyYZGTFjyuW5SgdDccdmJiR8K9-QjKHG_B0bnIXQ=s900-c-k-c0x00ffffff-no-rj",
            id: "10",
        },
        {
            detail: "Sint labore maiores deserunt.",
            image: "https://yt3.ggpht.com/cWNkg93oYga0W5Bosdb5Bb-A6Kq1etuzEGJyYZGTFjyuW5SgdDccdmJiR8K9-QjKHG_B0bnIXQ=s900-c-k-c0x00ffffff-no-rj",
            id: "9",
        },
        {
            detail: "Eligendi nostrum facilis qui vel labore rem accusamus ut.",
            image: "https://yt3.ggpht.com/cWNkg93oYga0W5Bosdb5Bb-A6Kq1etuzEGJyYZGTFjyuW5SgdDccdmJiR8K9-QjKHG_B0bnIXQ=s900-c-k-c0x00ffffff-no-rj",
            id: "10",
        },
        {
            detail: "Sint labore maiores deserunt.",
            image: "https://yt3.ggpht.com/cWNkg93oYga0W5Bosdb5Bb-A6Kq1etuzEGJyYZGTFjyuW5SgdDccdmJiR8K9-QjKHG_B0bnIXQ=s900-c-k-c0x00ffffff-no-rj",
            id: "9",
        },
        {
            detail: "Eligendi nostrum facilis qui vel labore rem accusamus ut.Eligendi nostrum facilis qui vel labore rem accusamus ut.Eligendi nostrum facilis qui vel labore rem accusamus ut.Eligendi nostrum facilis qui vel labore rem accusamus ut.",
            image: "https://yt3.ggpht.com/cWNkg93oYga0W5Bosdb5Bb-A6Kq1etuzEGJyYZGTFjyuW5SgdDccdmJiR8K9-QjKHG_B0bnIXQ=s900-c-k-c0x00ffffff-no-rj",
            id: "10",
        },
    ];
    return (
        <div className="flex-1 relative h-screen flex flex-col">
            <div
                className="bg-dark-300 w-full p-4 border-b border-gray-700
                            absolute top-0 left-0 "
            >
                <div className="flex items-center gap-3">
                    <div>
                        <img
                            src={profileDefault}
                            alt=""
                            className="rounded-full block w-[50px] h-[50px] object-cover"
                        />
                    </div>
                    <div>
                        <h4 className="text-slate-200 text-lg font-semibold">
                            duy.vox
                        </h4>
                        <p className="text-slate-400">Online</p>
                    </div>
                </div>
            </div>
            <div className="h-full w-full px-6 pt-24 pb-24 overflow-scroll  flex flex-col gap-6 scrollbar scrollbar-thumb-slate-600  scrollbar-track-gray-transparent">
                <MessageList messageList={messageList} />
            </div>
            <div className="pt-9 px-4 pb-4 flex items-center absolute  gap-3 left-0 bottom-0 w-full z-10 bg-dark-200 ">
                <div className="flex gap-4 items-center ">
                    <div className="cursor-pointer text-dark-50 text-2xl">
                        <FiLink className="" />
                    </div>
                    <div className="cursor-pointer text-dark-50 text-2xl">
                        <FiImage />
                    </div>
                </div>
                <input
                    type="text"
                    className="block flex-1 rounded-full bg-darkestBlue bg-dark-100 outline-0 border border-transparent pl-5 pr-12 py-2 text-gray-300  box-border placeholder:text-gray-400 "
                    placeholder="Aa"
                />
                <button className="bg-dark-50 p-3 rounded-full text-white">
                    <FiChevronsRight />
                </button>
            </div>
        </div>
    );
}
