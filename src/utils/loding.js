import React, {useState, useEffect} from "react";

const Loding = () => {
    // const [loding, setLoding] = useState(false);

    // const pageLoding = () => {
    //     setLoding(window.onloadstart);
    // }
    // useEffect(() => {
    //     setLoding(true,pageLoding);
    // })

    const Test = () => {
        window.onload(() => {
            alert('gi');
        })
    }

    const Loding = {
        position: 'fixed',
        width: 100 + 'vh',
        height: 100 + 'vh',
        backgroundColor: 'gray'
    }
    return (
        <>
            <div style={Loding} onLoadStart={Test}></div>
        </>
    )
}

export default Loding;