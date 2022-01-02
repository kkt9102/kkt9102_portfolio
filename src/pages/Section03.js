import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import portfolio_link from "./portfolio_link";

function Section03() {  
    return (
        <>
            <section className="section_03">
                <div className="cont_box">
                    <h3>PortFolio List</h3>
                    <portfolio_link />
                    <ul>
                        <li>
                            <a>
                                <div className="item_box">
                                    스타벅스 리저브
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Section03;