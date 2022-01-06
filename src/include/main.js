import React from "react";
import '../resource/css/common.css';
import '../resource/css/style.module.css';
import Header from "./Header";
import Section01 from "../pages/Section01";
import Section02 from "../pages/Section02";
import Section03 from "../pages/Section03";
import Footer from "./Footer";


function main(){
    return (
        <>   
        <Header />
            <Section01 />
            {/* <Section02 /> */}
            <Section03 />
        <Footer />
        </>
    )
}

export default main;