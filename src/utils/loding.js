import React, {useState, useEffect} from "react";

const Loding = () => {
    const [loding, setLoding] = useState(true);

    useEffect(() => {
        setLoding(false);
    })

    const Loding = {
        position: 'fixed',
        width: 100 + 'vh',
        height: 100 + 'vh',
        backgroundColor: 'gray'
    }
    return (
        <>
            <div style={Loding}></div>
        </>
    )
}

export default Loding;