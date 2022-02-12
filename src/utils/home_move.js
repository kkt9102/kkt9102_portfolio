import React from "react";
import { Link } from "react-router-dom";

import {useScroll} from './scrollMove';

function HomeMV() {
    const btn_style = {  
        position: 'fixed',
        display: 'flex',
        justifyContent: 'flex-end',
        width: 100 + '%',
        background: '#eeeeee',
        zIndex: 2
    }
    const btn_link = {
        padding:1 + 'rem',
        border: 0.1 + 'rem solid' + '#eeeeee',
        background: '#eeeeee',
        fontSize: 1.5 + 'rem',
        fontWeight: 600,
        color: '#' + 111111
    }
    const {scrollY} = useScroll();
    return (
        <>
            <div className="go_home" style={btn_style}>
                <Link to="/" style={btn_link}>
                    <div>{scrollY}</div>
                    <div>홈으로</div>
                </Link>
            </div>
        </>
    )
}

export default HomeMV;