import React from "react";
import Reserve from './pages/index';
import { BrowserRouter, HashRouter, Link, Route, Routes } from "react-router-dom";


function reserve_info(){
    return (
        <>
            <div>스벅 리저브</div>
            <div class="txt_box">
                <ul>
                    <li>"가장 진귀하고 이국적이며 정교한 풍미의 커피"</li>
                    <li>스타벅스 자체가 주는 브랜드 이미지</li>
                    <li>스타벅스 안의 또다른 스타벅스</li>
                    <li>프리미엄 커피로 소개하고 있지만 홈페이지 자체는 기본적인 스타벅스 홈페이지에서 별도의 홈페이지와 같은 느낌을 준다.</li>
                </ul>
            </div>
            <Link to="/Reserve">
                코딩 화면 이동
            </Link>
        </>
    )
}

export default reserve_info;