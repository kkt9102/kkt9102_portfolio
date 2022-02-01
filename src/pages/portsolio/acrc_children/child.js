import React from "react";
import style from "../../../resource/css/main_style.module.css";
import HomeMV from "../../../utils/home_move";

const AcrcChild = () => {
    return (
        <>
            <HomeMV/>
            <div className={`${style.child} ${style.portfolio_info}`}>
                <div className={style.con2}>
                    <h2 className={style.page_tit}>국민권익위원회 어린이 홈페이지</h2>
                </div>
            </div>
        </>
    )
}

export default AcrcChild;