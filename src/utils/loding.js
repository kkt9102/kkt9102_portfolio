import React, {useState, useEffect} from "react";
import Css from '../css';

const Loding = () => {


    return (
        <>
            <Css/>
            <div className='loding_page'>
                <div className="lodigng_txt">
                    <div>안녕하세요.</div>
                    <div>웹 퍼블리셔 김기태입니다.</div>
                </div>
                <div className="lds-ripple">
                    <div></div>
                    <div></div>
                </div>
            </div>
        </>
    )
}

export default Loding;