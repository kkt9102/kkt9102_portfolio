import React from "react";
import { Link } from "react-router-dom";
import { BsArrowLeftSquare } from 'react-icons/bs';

import {useScroll} from './scrollMove';

function HomeMV() {
    const {scrollY} = useScroll();
    const PageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPer = (scrollY/PageHeight) * 100;
    const progressBar = {
        position: 'fixed',
        width: (scrollY/PageHeight) * 100 + '%',
        left: 0,
        top: 0
    }
    
    // const PageWidth = document.documentElement.scrollWidth;
    
    return (
        <>
            <div className={`${scrollPer > 30 ? 'y_move' : '' } go_home`}>
                <div className={`${scrollPer > 30 ? 'y_move' : '' } progress`} style={progressBar}></div>
                <Link to="/" tabIndex='0'>
                    <BsArrowLeftSquare/>
                    {/* { PageWidth < 420 ? <BsArrowLeftSquare/> : <div>홈으로</div>}   */}
                </Link>
            </div>
        </>
    )
}

export default HomeMV;