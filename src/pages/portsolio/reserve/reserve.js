import React from "react";

import StarbucksReserve from "./StarbucksReserve";
import ReserveInfo from "./reserve_info";
import { Route, Routes } from "react-router-dom";
function Reserve(){


    return(
        <>  
        {/* <ReserveInfo/> */}
            {/* <Routes>
                <Route path="./reserve_info" element={<ReserveInfo/>}/>
                <Route path="./StarbucksReserve" element={<StarbucksReserve/>} />
            </Routes> */}
            <StarbucksReserve/>
        </>
    )
}

export default Reserve;