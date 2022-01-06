import React from "react";
import Header from './include/Header';
import Section01 from "./section01";
import Section02 from "./section02";
import Section03 from "./section03";
import Section04 from "./section04";
import '../resource/css/reserve_style.module.css';



function Reserve() {
    return (
        <>
        <div className="reserve">
        <Header />
        <Section01 />
        <Section02 />
        <Section03 />
        <Section04 />
        </div>
        </>
    )
}

export default Reserve;