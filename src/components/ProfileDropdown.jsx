import React from "react";
import { Menu, Transition } from "@headlessui/react";

export default function ProfileDropdown({ children }) {
    return (
        <Menu as="div" className="relative">
            <Menu.Button>{children}</Menu.Button>

            <Menu.Items className="py-3 px-2 rounded-sm bg-dark-100 border-[1px] border-slate-700 text-lg absolute bottom-[120%] w-[150px]">
                <Menu.Item>
                    <span className="block text-gray-300  relative  py-1 px-2 rounded ease-in-out duration-100 cursor-pointer hover:bg-dark-50 hover:text-white">
                        My Profile
                    </span>
                </Menu.Item>
                <Menu.Item>
                    <span className="block text-gray-300  relative  py-1 px-2 rounded ease-in-out duration-100 cursor-pointer hover:bg-dark-50 hover:text-white">
                        Log out
                    </span>
                </Menu.Item>
            </Menu.Items>
        </Menu>
    );
}
