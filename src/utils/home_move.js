import { parseHTML } from "jquery";
import React from "react";
import { Link } from "react-router-dom";

import { AiOutlineHome } from 'react-icons/ai';

import {useScroll} from './scrollMove';

function HomeMV() {
    const btn_style = {  
        position: 'fixed',
        display: 'flex',
        justifyContent: 'flex-end',
        width: 100 + '%',
        background: '#fefefe',
        zIndex: 2
    }
    const btn_link = {
        padding:1 + 'rem',
        border: 0.1 + 'rem solid' + '#eeeeee',
        background: '#fefefe',
        fontSize: 1.5 + 'rem',
        fontWeight: 600,
        color: '#' + 111111
    }

    const {scrollY} = useScroll();
    const PageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progressBar = {
        position: 'fixed',
        width: (scrollY/PageHeight) * 100 + '%',
        height: 2,
        left: 0,
        top: 0,
        background: '#' + 141414
    }
    
    const PageWidth = document.documentElement.scrollWidth;
    
    return (
        <>
            <div className="go_home" style={btn_style}>
                <div style={progressBar}></div>
                <Link to="/" style={btn_link}>
                    { PageWidth < 420 ? <AiOutlineHome/> : <div>홈으로</div>}  
                </Link>
            </div>
        </>
    )
}

export default HomeMV;