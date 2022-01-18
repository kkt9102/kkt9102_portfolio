import React from "react";
import HomeMV from "../../../utils/home_move";
import StarbucksReserve from "./StarbucksReserve";
import ReserveInfo from "./reserve_info";
function Reserve(){
    
    return(
        <>  
            <HomeMV />
            {/* <ReserveInfo/> */}
            <StarbucksReserve/>
        </>
    )
}

export default Reserve;