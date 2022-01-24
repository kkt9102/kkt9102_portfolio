import React from "react";
import style from "./resource/css/Reserve.module.css";
import RHeader from "./include/reserve_header";
import ReserveSC1 from "./components/reserve_section_1";
import ReserveSC2 from "./components/reserve_section_2";
import ReserveSC3 from "./components/reserve_section_3";
import ReserveSC4 from "./components/reserve_section_4";
import ReserveSC5 from "./components/reserve_section_5";
import RFooter from "./include/reserve_footer";


function StarbucksReserve() {

    return(
        <>
            <div className={style.reserve}>
                <RHeader/>
                <ReserveSC1/>
                <ReserveSC2/>
                <ReserveSC3/>
                <ReserveSC4/>
                <ReserveSC5/>
                <RFooter/>
            </div>
        </>
    )
}


export default StarbucksReserve;