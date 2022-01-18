import React from "react";
import { Link } from "react-router-dom";

function HomeMV() {
    return (
        <>
            <div className="go_home">
                <Link to="/">
                    <div>홈으로</div>
                </Link>
            </div>
        </>
    )
}

export default HomeMV;