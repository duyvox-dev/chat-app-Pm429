import React from "react";
import SideMenu from "../components/SideMenu";
import UserChatSection from "../components/UserChatSection";
import ChatBox from "../components/ChatBox";

export default function Home() {
    return (
        <div className="bg-dark-200 w-full min-h-screen flex ">
            <SideMenu />
            <UserChatSection />
            <ChatBox />
        </div>
    );
}
