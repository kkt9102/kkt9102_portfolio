import React from "react";
import style from '../../resource/css/main_style.module.css';
import { BrowserRouter, Link } from "react-router-dom";

function WebWork(){

    return (
        <>
        <section id={style.section_03}>
            <div className={style.con}>
                <ul>
                    <li>
                    <Link to ="/Reserve">스타벅스 리저브 (Re:Design)</Link>
                    </li>
                    <li>
                    <Link to ="/clean">부패방지 3단계</Link>
                    </li>
                    <li>
                    <Link to ="/Acrc">국민권익위원회 홈페이지·업무포털 전면개편</Link>
                    </li>
                </ul>
            </div>
        </section>
        </>
    )
}

export default WebWork;