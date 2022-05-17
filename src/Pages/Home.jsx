import React from "react";
import SideMenu from "../components/SideMenu/index";
import UserChatSection from "../components/UserChatSection/index";
import ChatBox from "../components/ChatBox/index";

export default function Home() {
    return (
        <div className="bg-dark-200 w-full min-h-screen flex ">
            <SideMenu />
            <UserChatSection />
            <ChatBox />
        </div>
    );
}
