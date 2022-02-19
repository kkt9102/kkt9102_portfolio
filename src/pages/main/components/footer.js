import React from "react";
import { RiGithubFill } from "react-icons/ri";
import { FaBlogger } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className='main_footer section flex flex_jc_c flex_dir_c'>
                <div className='copyright flex_1_0_0 flex_jc_c'>Copyright © kkt9102.com - Powered by kkt9102</div>
                <div className="link_box">
                    <ul className="flex flex_jc_c">
                        <li className='github'>
                            <a href="https://github.com/kkt9102" target="_blank" rel="noopener noreferrer" title="깃허브 바로가기"><RiGithubFill/></a>
                        </li>
                        <li className='gitblog'>
                            <a href="https://kkt9102.github.io/"  target="_blank" rel="noopener noreferrer" title="블로그 바로가기"><FaBlogger/></a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer;