import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

function WebWork(){

    return (
        <>
            <Link to ="/Reserve">스타벅스 리저브 (Re:Design)</Link>
            <Link to ="/clean">부패방지 3단계</Link>
            <Link to ="/Acrc">국민권익위원회 홈페이지·업무포털 전면개편</Link>
        </>
    )
}

export default WebWork;