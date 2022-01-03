import React from "react";
import logo_s from '../resource/img/logo_s.png';
import Ex_pop from './include/extraction_popup';

function Section03() {
    return (
        <>
        <section id="section_03">
            <div className="sc_tit"><img src={logo_s}></img>리저브만의 특별한 다섯가지 추출방식</div>
            <div className="cont_box">
                <Ex_pop />
            </div>
        </section>
        </>
    )
}

export default Section03;