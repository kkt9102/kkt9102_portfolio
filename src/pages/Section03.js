import React from "react";
import "../resource/css/common.css";
import { Link } from 'react-router-dom';
import style from "../resource/css/style.module.css";

function Section03() {  
    const reserve = "/reserve_info";
    return (
        <>
            <section className={`${style.section_03} ${style.main_section}`}>
                <div className={style.cont_box}>
                    <h3>PortFolio List</h3>
                    <ul>
                        <li>
                            <Link to={reserve}>
                            <div className={style.item_box}>
                                <div>되냐?</div>
                                <div>된거야?</div>
                            </div>
                            </Link>
                        </li>
                        <li>
                            
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Section03;