import React from "react";

export default function Conversation({ data }) {
    const truncate = (input) =>
        input?.length > 30 ? `${input.substring(0, 30)}...` : input;
    return (
        <div className="bg-dark-100 flex items-center gap-3 rounded-md p-3 w-full cursor-pointer hover:bg-slate-600 ease-in-out duration-200 group zoom-in">
            <div className=" mt-auto">
                <img
                    src={data.image}
                    alt=""
                    className="rounded-full block w-[50px] h-[50px] object-cover"
                />
            </div>
            <div>
                <h4 className="text-slate-200 font-semibold">{data.name}</h4>
                <p className="text-slate-400">{truncate(data.chat)}</p>
            </div>
        </div>
    );
}
