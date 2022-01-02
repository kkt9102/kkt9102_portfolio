import React from "react";
import { Link } from 'react-router-dom';

function Section03() {  
    const reserve = "/reserve_info";
    return (
        <>
            <section className="section_03">
                <div className="cont_box">
                    <h3>PortFolio List</h3>
                    <ul>
                        <li>
                            <Link to={reserve}>
                            <div className="item_box">
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