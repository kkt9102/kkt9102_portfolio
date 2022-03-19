import React from 'react';

import prtl from '../../clonePage/resource/css/prtl_clone.module.css';

const Footer = () => {
    return(
        <>
            <footer id={prtl.footer} className={`flex flex_jc_sb`}>
                <div className={`${prtl.left} flex flex_jc_sv`}>
                    <div className={`${prtl.sevice_tel} flex flex_ai_c`}>
                        <div>PC유지보수</div>
                        <div>1234(내선)</div>
                    </div>
                    <div className={`${prtl.service_tel} flex flex_ai_c`}>
                        <div>정보시스템·전화기·보안·기타 </div>
                        <div>9876(내선), 1811-9876(외부)</div>
                    </div>
                    <button className={`${prtl.helpdesk} flex flex_jc_c flex_ai_c`}>
                        헬프데스크<i className='xi-external-link'></i>
                    </button>
                </div>
                <div className={`${prtl.right} flex flex_ai_c`}>
                    <div className={`${prtl.last_login_time} flex`}>
                        <div>최종접속시간</div>
                        <div>2022-03-01 13:12:34</div>
                    </div>
                    <div className={`${prtl.login_ip} flex flex_ai_c`}>
                        <div>접속IP</div>
                        <div>111.222.333.4</div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;