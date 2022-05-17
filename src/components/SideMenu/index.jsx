import React from "react";
import profileDefault from "../../assets/images/profile_default.jpg";
import { FaPaperPlane, FaUserCircle } from "react-icons/fa";
import { TiContacts } from "react-icons/ti";
import { FiMail, FiUsers, FiUser, FiSettings, FiBook } from "react-icons/fi";
import ProfileDropdown from "./ProfileDropdown";

const AcountAvatar = ({ url = profileDefault }) => {
    return (
        <img
            src={url}
            alt=""
            className="rounded-full block w-[40px] h-[40px] cursor-pointer"
        />
    );
};
export default function SideMenu() {
    return (
        <div className="min-h-screen bg-dark-300 px-3 pt-5 pb-10 text-2xl flex justify-between flex-col items-center">
            <span className=" cursor-pointer">
                <FaPaperPlane className=" text-dark-50 inline-block " />
            </span>
            <ul className="flex flex-col gap-16">
                <li className=" text-gray-500 relative hover:bg-dark-100 rounded-md p-3  hover:text-gray-400 ease-in-out duration-100 group cursor-pointer">
                    <FiMail className="group-hover:text-dark-50"></FiMail>
                    <span className="absolute z-10 top-1/2 -translate-y-1/2 left-[120%] text-lg px-2 py-1 bg-dark-300 hidden group-hover:block">
                        Message
                    </span>
                </li>
                <li className=" text-gray-500  relative hover:bg-dark-100 rounded-md p-3 hover:text-gray-400 ease-in-out duration-100 group cursor-pointer">
                    <FiUsers className="group-hover:text-dark-50"></FiUsers>
                    <span className="absolute z-10 top-1/2 -translate-y-1/2 left-[120%] text-lg px-2 py-1 bg-dark-300 hidden group-hover:block">
                        Group
                    </span>
                </li>
                <li className=" text-gray-500  relative hover:bg-dark-100 rounded-md p-3 hover:text-gray-400 ease-in-out duration-100 group cursor-pointer">
                    <FiBook className="group-hover:text-dark-50"></FiBook>
                    <span className="absolute z-10 top-1/2 -translate-y-1/2 left-[120%] text-lg px-2 py-1 bg-dark-300 hidden group-hover:block">
                        Contact
                    </span>
                </li>
                <li className="  text-gray-500  relative hover:bg-dark-100 rounded-md p-3 hover:text-gray-400 ease-in-out duration-100 group cursor-pointer">
                    <FiSettings className="group-hover:text-dark-50"></FiSettings>
                    <span className="absolute z-10 top-1/2 -translate-y-1/2 left-[120%] text-lg px-2 py-1 bg-dark-300 hidden group-hover:block">
                        Settings
                    </span>
                </li>
            </ul>
            <div>
                <ProfileDropdown>
                    <AcountAvatar />
                </ProfileDropdown>
            </div>
        </div>
    );
}
