import React from "react";
import { Link } from "react-router-dom";

function Home_MV() {
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

export default Home_MV;