import React from "react"

const ExtraModal = (props) => {
    // 
    const {open, close} = props;

    return (
        // 팝업이 열릴 때 openModal Class 부여
        <div className={open ? "openModal modal" : "modal"}>
            <div className="popup_header">
                <div className="title"></div>
                <div className="close" onClick={close}></div>
            </div>
        </div>
    );
};

export default ExtraModal;