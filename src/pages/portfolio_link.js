import React from "react";
import {BrowserRouter, Route} from 'react-router-dom';

import reserve_info from "./portfolio/reserve_info";

function portfolio_link() {
    return (
        <>
        <div>
        <BrowserRouter>
            <Route path="/portfolio" exact component={reserve_info} />
        </BrowserRouter>
        </div>
        </>
    )
}

export default portfolio_link;