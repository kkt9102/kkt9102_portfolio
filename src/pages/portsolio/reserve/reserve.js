import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import starbucksReserve from "./reserve_main";
import reserve_info from "./reserve_info";
function Reserve(){
    return(
        <>
            <Link to="/">홈으로</Link>
            

            <BrowserRouter>
                <Link to="./reserve_main" target="_blank">스타벅스 리저브</Link>
                <Routes>
                    <Route path="/reserve_info" element={<reserve_info/>}/>
                    <Route path="/starbucksReserve" element={<starbucksReserve/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Reserve;