import React from "react";

export default function Message({ message }) {
    return (
        <div className="flex gap-4">
            <div className="flex flex-col justify-end">
                <img
                    src={message.image}
                    alt=""
                    className="rounded-full block w-[50px] h-[50px] object-cover"
                />
            </div>
            <div className=" bg-dark-100 rounded-lg max-w-lg">
                <p className="text-gray-200  p-5">{message.detail}</p>
            </div>
        </div>
    );
}
