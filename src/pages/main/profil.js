import style from '../../resource/css/main_style.module.css';


function Profil(){

    return(
        <>
            <section id={style.section_02}>
                <div className={style.cont_box}>
                    <div className={style.img_box}>
                        <img ></img>
                    </div>
                    <div className={style.txt_box}>
                        <div className={style.sub_tit}></div>
                        <ul>
                            <li>홈페이지 만들기를 좋아하고 새로운 기술에 대한 흥미를 느끼는 웹 퍼블리셔 김기태 입니다.</li>
                            <li>새로운 기술에 대한 흥미를 느끼며 항상 새로운 기술을 알아가는데 흥미를 느낍니다.</li>
                            <li>어떤식으로 코드를 작성해야 조금 더 편한 유지보수가 가능할 지</li>
                            <li>개발자와 협업을 진행할 때 가장 좋은 방법이 좋을 지 고민합니다.</li>
                        </ul>
                    </div>
                </div>
                <div className={style.cont_box}>
                    <div className={style.sub_txt}>주요경력</div>
                    <ul>
                        <li className={style.dots_w}>2021.06 ~ 2022.02 국민권익위원회 홈페이지·업무포털 전면개편 사업 (초급 JAVA개발, 퍼블리셔)</li>
                        <li className={style.dots_w}>2020.12 ~ 2021.03 부패방지 종합정보시스템 구축3단계 (퍼블리셔)</li>
                        <li className={style.dots_w}>2020.04 ~ 2020.10 스마트기기 UXUI디자인 양성과정</li>
                        <li className={style.dots_w}>2009.03 ~ 2015.02 배재대학교 칠예과 졸업</li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Profil;