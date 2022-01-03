import React from "react";
import Style from './style'
import Header from "./Header";
import Section01 from "../pages/Section01";
import Section02 from "../pages/Section02";
import Section03 from "../pages/Section03";
import Footer from "./Footer";


function main(){
    return (
        <>   
        <Style />
        <Header />
            <Section01 />
            <Section02 />
            <Section03 />
        <Footer />
        </>
    )
}

export default main;