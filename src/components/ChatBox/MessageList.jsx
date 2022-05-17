import React from "react";
import Message from "./Message";

export default function MessageList({ messageList }) {
    console.log(messageList);
    return (
        <>
            {messageList.map((message) => {
                return <Message message={message} key={message.id}></Message>;
            })}
        </>
    );
}
