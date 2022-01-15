import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home_MV from "../../../utils/home_move";
import StarbucksReserve from "./reserve_main";
import Reserve_info from "./reserve_info";
function Reserve(){
    
    return(
        <>
            {/* <Home_MV /> */}
            {/* <Reserve_info/> */}
            <StarbucksReserve/>
            {/* <BrowserRouter>
                <Link to="/starbucksReserve" rel="noopener noreferrer" target="_blank">스타벅스 리저브 코딩 페이지</Link>
                <Routes>
                    <Route path="./reserve_info" element={<Reserve_info/>}/>
                    <Route path="./reserve_main" element={<StarbucksReserve/>}/>
                </Routes>
            </BrowserRouter> */}
        </>
    )
}

export default Reserve;