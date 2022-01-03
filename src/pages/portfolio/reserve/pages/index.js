import React from "react";
import Header from './include/Header';
import Section01 from "./section01";
import '../resource/css/reserve_style.css';
import Sc_bk_01 from '../resource/img/section_back_img_1.jpg';
import Logo from '../resource/img/main_logo.png';

function Reserve() {
    return (
        <>
        <div className="reserve">
        <Header />
        <Section01 />
        </div>
        </>
    )
}

export default Reserve;