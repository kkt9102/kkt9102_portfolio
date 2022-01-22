import style from '../../resource/css/main_style.module.css';
import profil from '../../resource/img/profil.JPG';


const Profil = () => {

    return(
        <>
            <section id={style.section_02} className={style.section}>
                <div className={style.con}>
                    <div className={`${style.cont_box} flex`}>
                        <div className={style.img_box}>
                            <img src={profil} alt='profil_photo'></img>
                        </div>
                        <div className={`${style.txt_box} ${style.intro}`}>
                            <div className={style.sub_tit}>웹 퍼블리셔 김기태 입니다.</div>
                            <ul>
                                <li>웹 페이지 만들기를 좋아하고 새로운 기술에 대한 두려움보다 흥미를 느끼며</li>
                                <li>코드를 작성할 때 어떤식으로 작성해야 조금 더 간결한 작업이 가능할 지</li>
                                <li>유지보수 시에 조금 더 쉬울 지 다른 사람들이 보기에도 이해하기 쉬운 코드를 작성했는지</li>
                                <li>개발자,디자이너와 협업을 진행할 때 가장 좋은 방법이 무엇인지 고민합니다.</li>
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
                </div>
            </section>
        </>
    )
}

export default Profil;