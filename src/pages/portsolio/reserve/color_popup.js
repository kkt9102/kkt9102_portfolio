import React from "react";
import style from "../../../resource/css/main_style.module.css";


const ColorPop = (props) => {
    const { open, close, header } = props;

    return (
        <div className={open ? `${style.open_pop} ${style.popup}` : `${style.popup}`}>
            {open ? (
                <section>
                    {header}
                    <button className={style.popup_close} onClick={close}>
                        {' '}
                            <div className={style.close_line}></div>
                            <div className={style.close_line}></div>
                        {' '}
                    </button>
                    <div></div>
                </section>
            ) : null}
        </div>
    )
}

export default ColorPop;