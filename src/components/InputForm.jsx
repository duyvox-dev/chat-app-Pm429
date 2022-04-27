import React from "react";
import { MdSend } from "react-icons/md";
export default function InputForm() {
    return (
        <div className="flex justify-between items-center">
            <input
                type="text"
                className=" flex-1 placeholder:text-slate-400 center bg-white  border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mt-auto"
                placeholder="Aa"
            />
            <button className="bg-sky-500 hover:bg-sky-600 active:bg-sky-700  focus:outline-none focus:ring focus:ring-sky-300  rounded-md py-2 px-5 text-white h-full">
                <MdSend className="" />
            </button>
        </div>
    );
}
