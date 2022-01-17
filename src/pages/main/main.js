import { useState, useEffect } from "react";
import '../../resource/css/common.css';
import style from '../../resource/css/main_style.module.css';
import Profil from "./profil";
import WebWork from "./web_work";


function Main() {
    const [scroll_P, scroll_M] = useState(0);
    const scrollY = (window.scrollY);

    // const [ScrollY, setScrollY] = useState(0);  // 스크롤값을 저장하기 위한 상태
    // const handleFollow = () => {
    //   setScrollY(window.pageYOffset); // window 스크롤 값을 ScrollY에 저장
    // }
  
    // useEffect(() => {
    //   console.log("ScrollY is ", ScrollY); // ScrollY가 변화할때마다 값을 콘솔에 출력
    // }, [ScrollY])
  
    // useEffect(() => {
    //   const watch = () => {
    //     window.addEventListener('scroll', handleFollow);
    //   }
    //   watch(); // addEventListener 함수를 실행
    //   return () => {
    //     window.removeEventListener('scroll', handleFollow); // addEventListener 함수를 삭제
    //   }
    // })

    // const moveToTop = () => (document.documentElement.scrollTop = 0);

    return (
        <div id={style.main_page}>
            <header className={`${style.main_header} fixed`}>
                <nav>
                    <ul className="flex flex_jc_e">
                        <li className="flex flex_ai_c" onClick={()=>{}}><span>Home</span></li>
                        <li className="flex flex_ai_c" onClick={()=>{}}><span>Profil</span></li>
                        <li className="flex flex_ai_c" onClick={()=>{}}><span>Web Work</span></li>
                        <li className="flex flex_ai_c" onClick={()=>{}}><span>Contact</span></li>
                    </ul>
                </nav>
            </header>
            <section id={style.section_01} className={style.section}>
                <div className={style.con}>
                    <div className={style.main_deco}>
                        <div className={style.main_tit}>kkt9102</div>
                        <div className={style.main_sub_tit}>Portfolio</div>
                    </div>
                </div>
            </section>
            <Profil />
            <WebWork />
            {/* <button onClick={moveToTop}>상단으로</button> */}
        </div>
    )
}

export default Main;