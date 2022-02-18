const Profil = () => {
    const z_first = {
        position: 'relative', 
        zIndex: 10}
    return(
        <>
            <section id='section_02' className='section relative main_sc_2'>
                <div className='page_tit'>
                    <span className="flex txt1">안녕하세요!</span>
                    <span className="flex txt1">웹 만들기를 좋아하는</span>
                    <span className="flex txt2">웹 퍼블리셔 1년차 <div className="txt3">김기태</div> 입니다</span>
                </div>
                <div className='con'>
                    <div className='cont_box flex flex_wrap_wrap'>
                        <div className='img_box fixed' alt="프로필 사진"></div>
                        <div className='txt_box intro'>
                            <ul style={z_first}>
                                <li>웹 페이지 만들기를 좋아하고 새로운 기술에 대한 두려움보다 흥미를 먼저 느낍니다.</li>
                                <li>웹 페이지의 뼈대인 HTML로 웹 페이지의 뼈대를 잡고</li>
                                <li>그 뼈때 위에 CSS를 이용하여 살과 옷을 입혀주고</li>
                                <li>JavaScript를 이용하여 웹 페이지에 움직임 주는 것을 좋아합니다.</li>
                                <li>웹 페이지를 만들때 혼자만의 세상에서 작업을 진행하지 않고 항상 팀원들과 소통하며 작업을 진행합니다.</li>
                                <li>코드짜는것을 즐거워하며 더 쉽고 간결한 코드를 짜기위해 고민합니다.</li>
                                <li>그리고 웹 페이지에 움직임을 주는 것에 그치지 않고 프로그래밍 언어와 DataBase를 사용하여</li>
                                <li>사용자들에게 보여줄 수 있는 웹 페이지를 만들기 위해 현재 자리에서 멈추지 않고 전진하고 있습니다.</li>
                            </ul>
                        <div className='sub_tit'>주요경력</div>
                            <ul>
                                <li className='dots_w flex' style={z_first}><span className="date">2021.06 ~ 2022.02</span> 국민권익위원회 홈페이지·업무포털 전면개편 사업 (JAVA개발 초급, 퍼블리셔)</li>
                                <li className='dots_w flex' style={z_first}><span className="date">2020.12 ~ 2021.03</span> 부패방지 종합정보시스템 구축3단계 (퍼블리셔)</li>
                                <li className='dots_w flex' style={z_first}><span className="date">2020.04 ~ 2020.10</span> 스마트기기 UXUI디자인 양성과정</li>
                                <li className='dots_w flex' style={z_first}><span className="date">2009.03 ~ 2015.02</span> 배재대학교 칠예과 졸업</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profil;