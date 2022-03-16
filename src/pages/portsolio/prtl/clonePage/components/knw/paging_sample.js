import React from 'react';

import knw from '../../resource/css/knw.module.css';

const Paging = () => {
    return(
        <>
            <div className={`${knw.paging} flex flex_jc_c`}>
                <div className={knw.first_page}><i className='xi-angle-left-min'></i><i className='xi-angle-left-min'></i></div>
                <div className={knw.prev_page}><i className='xi-angle-left-min'></i></div>
                <ul className={`${knw.paging_number} flex flex_jc_c`}>
                    <li className={knw.current_page}><span>1</span></li>
                    <li><span>2</span></li>
                    <li><span>3</span></li>
                    <li><span>4</span></li>
                    <li><span>5</span></li>
                    <li><span>6</span></li>
                    <li><span>7</span></li>
                    <li><span>8</span></li>
                    <li><span>9</span></li>
                    <li><span>10</span></li>
                </ul>
                <div className={knw.next_page}><i className='xi-angle-right-min'></i></div>
                <div className={knw.last_page}><i className='xi-angle-right-min'></i><i className='xi-angle-right-min'></i></div>
            </div>
        </>
    )
}

export default Paging;