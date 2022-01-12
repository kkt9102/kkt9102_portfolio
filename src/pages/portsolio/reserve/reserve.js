import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import starbucksReserve from "./reserve_main";
import reserve_info from "./reserve_info";
function Reserve(){
    const reserve ={starbucksReserve};
    return(
        <>
            <Link to="/">홈으로</Link>
            
            <Link to={reserve} target="_blank">스타벅스 리저브 코딩 페이지</Link>
        </>
    )
}

export default Reserve;