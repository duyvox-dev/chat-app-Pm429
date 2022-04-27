import React from "react";
import styled from "styled-components";

export default function Message(message) {
    return (
        <span className=" py-2 px-4 mb-3 bg-sky-600 text-white shadow-md shadow-sky-200 rounded-sm ml-auto">
            {message.detail}
        </span>
    );
}
