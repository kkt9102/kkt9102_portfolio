import React from "react";


const ColorPop = (props) => {
    const { open, close, header } = props;

    return (
        <div className={open ? 'open_pop popup' : 'popup'}>
            {open ? (
                <section>
                    {header}
                    <button className='popup_close' onClick={close}>
                        {' '}
                            <div className='close_line'></div>
                            <div className='close_line'></div>
                        {' '}
                    </button>
                    <div></div>
                </section>
            ) : null}
        </div>
    )
}

export default ColorPop;