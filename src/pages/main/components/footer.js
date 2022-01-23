import React from "react";
import style from "../../../resource/css/main_style.module.css";

const Footer = () => {
    return (
        <>
            <footer className={`${style.main_footer} ${style.section} flex flex_jc_c`}>
                <div className={style.copyright}>Copyright © kkt9102.com - Powered by kkt9102</div>
            </footer>
        </>
    )
}

export default Footer;