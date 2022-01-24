import React from "react";
import { Link } from "react-router-dom";

function HomeMV() {
    const btn_style = {  
        position: 'fixed',
        display: 'flex',
        justifyContent: 'flex-end',
        width: 100 + '%',
        background: '#eeeeee'
    }
    const btn_link = {
        padding:1 + 'rem',
        border: 0.1 + 'rem solid' + '#eeeeee',
        background: '#eeeeee',
        fontSize: 1.5 + 'rem',
        fontWeight: 600,
        color: '#' + 111111
    }

    return (
        <>
            <div className="go_home" style={btn_style}>
                <Link to="/" style={btn_link}>
                    <div>홈으로</div>
                </Link>
            </div>
        </>
    )
}

export default HomeMV;