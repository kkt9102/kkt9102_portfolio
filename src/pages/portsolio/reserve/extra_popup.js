import React from "react"
import style from '../reserve/resource/css/Reserve.module.css';

function ExtraModal() {
    return (
        <>
            <nav className={`${style.extra_modal} tests`}>
                <ul>
                    <li className="fixed"></li>
                    <li className="fixed"></li>
                    <li className="fixed"></li>
                    <li className="fixed"></li>
                    <li className="fixed"></li>
                </ul>
            </nav>
        </>
    )
};

export default ExtraModal;
