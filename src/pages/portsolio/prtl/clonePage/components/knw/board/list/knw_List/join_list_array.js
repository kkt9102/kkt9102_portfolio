import React, { useState } from 'react';

import knw from '../../../../../resource/css/knw.module.css';

export const KnwJoinList = ({list}) => {
    const [iscontent,setcontent] = useState(false);

    const contentAdd = () => {
        iscontent = !iscontent;
    }
    return(
        <li className={`${knw.top_1} flex flex_wrap_wrap relative`}>
            <div className={`${knw.cont_box}`}>
                <div className={`${knw.cate} flex flex_jc_c flex_ai_c`}>분야별</div>
                <div className={`${knw.tit}`}>{list.tit}</div>
                <div className={`${knw.contents}`}>{list.content}</div>
            </div>
            <div className={`${knw.board_info} flex flex_jc_sb flex_ai_c`}>
                <div className={`${knw.left} flex flex_jc_s`}>
                    <div className={knw.writer}>{list.writer}</div>
                    <div className={knw.reg_dt}>{list.reg_dt}</div>
                </div>
                <div className={`${knw.right} flex flex_jc_e`}>
                    <div className={`${knw.like} flex flex_ai_c`}>
                        <i class="xi-thumbs-up"></i>
                        <p>추천<span>{list.like}</span> 건</p>
                    </div>
                    <div className={`${knw.cmt} flex flex_ai_c`}>
                        <i class="xi-message"></i>
                        <p>답변<span>{list.comment}</span> 건</p>
                    </div>
                    <div className={`${knw.select} flex flex_ai_c`}>
                        <i class="xi-crown"></i>
                        <p>채택<span>{list.select}</span> 건</p>
                    </div>
                </div>
            </div>
        </li>
    );
}

const KnwJoinLists = () => {
    const items = [
        {
            id:1,
            numbers:'30',
            tit: '권익지식 이음터 게시글 제목 영역입니다.권익지식 이음터 게시글 제목 영역입니다.권익지식 이음터 게시글 제목 영역입니다.권익지식 이음터 게시글 제목 영역입니다.권익지식 이음터 게시글 제목 영역입니다.권익지식 이음터 게시글 제목 영역입니다.',
            content: '해당 게시물의 내용을 일부분 보여주는 영역입니다.',
            writer: '김철수',
            reg_dt: '2022-03-10',
            comment: '2',
            like: '1',
            select: '30'
        },
        {
            id:2,
            numbers:'29',
            tit: '권익지식 이음터 게시글 제목 샘플 영역입니다.',
            content: '해당 게시물의 내용을 일부분 보여주는 영역입니다.해당 게시물의 내용을 일부분 보여주는 영역입니다.해당 게시물의 내용을 일부분 보여주는 영역입니다.해당 게시물의 내용을 일부분 보여주는 영역입니다.해당 게시물의 내용을 일부분 보여주는 영역입니다.해당 게시물의 내용을 일부분 보여주는 영역입니다.해당 게시물의 내용을 일부분 보여주는 영역입니다.해당 게시물의 내용을 일부분 보여주는 영역입니다.',
            writer: '김군',
            reg_dt: '2022-03-10',
            comment: '18',
            like: '2',
            select: '4'
        },
        {
            id:3,
            numbers:'28',
            tit: '권익지식 이음터 게시글 제목 샘플입니다. text-overflow 처리입니다.',
            content: '해당 게시물의 내용을 일부분 보여주는 영역입니다.',
            writer: '박수지',
            reg_dt: '2022-03-08',
            comment: '2',
            like: '4',
            select: '56'
        },
        {
            id:4,
            numbers:'27',
            tit: '권익지식 이음터 게시글 제목 샘플입니다. text-overflow 처리입니다.',
            content: '해당 게시물의 내용을 일부분 보여주는 영역입니다.',
            writer: '김은희',
            reg_dt: '2022-03-07',
            comment: '40',
            like: '269',
            select: '15'
        },
        {
            id:5,
            numbers:'26',
            tit: '권익지식 이음터 게시글 제목 샘플입니다. text-overflow 처리입니다.',
            content: '해당 게시물의 내용을 일부분 보여주는 영역입니다.',
            writer: '박철수',
            reg_dt: '2022-03-06',
            comment: '4',
            like: '2',
            select: '2'
        },
        {
            id:6,
            numbers:'25',
            tit: '권익지식 이음터 게시글 제목영역 샘플을 위한 텍스트입니다. 게시글 제목영역 샘플을 위한 텍스트입니다. ',
            content: '해당 게시물의 내용을 일부분 보여주는 영역입니다.',
            writer: '김빛나리',
            reg_dt: '2022-03-04',
            comment: '',
            like: '12',
            select: ''
        },
        {
            id:7,
            numbers:'24',
            tit: '권익지식 이음터 게시글 제목영역 샘플을 위한 텍스트입니다. 게시글 제목영역 샘플을 위한 텍스트입니다. ',
            content: '해당 게시물의 내용을 일부분 보여주는 영역입니다.해당 게시물의 내용을 일부분 보여주는 영역입니다.',
            writer: '박군',
            reg_dt: '2022-03-04',
            comment: '1',
            like: '129',
            select: '6'
        },
        {
            id:8,
            numbers:'23',
            tit: '권익지식 이음터 게시글 제목영역 샘플을 위한 텍스트입니다. 게시글 제목영역 샘플을 위한 텍스트입니다. ',
            content: '해당 게시물의 내용을 일부분 보여주는 영역입니다.',
            writer: '김철수',
            reg_dt: '2022-03-03',
            comment: '95',
            like: '10',
            select: '3'
        },
        {
            id:9,
            numbers:'22',
            tit: '권익지식 이음터 게시글 제목영역 샘플을 위한 텍스트입니다. 게시글 제목영역 샘플을 위한 텍스트입니다. ',
            content: '해당 게시물의 내용을 일부분 보여주는 영역입니다.',
            writer: '김은희',
            reg_dt: '2022-03-02',
            comment: '15',
            like: '',
            select: ''
        },
        {
            id:10,
            numbers: '21',
            tit: '권익지식 이음터 게시글 제목영역 샘플을 위한 텍스트입니다. 게시글 제목영역 샘플을 위한 텍스트입니다. ',
            content: '해당 게시물의 내용을 일부분 보여주는 영역입니다.해당 게시물의 내용을 일부분 보여주는 영역입니다.',
            writer: '김은희',
            reg_dt: '2022-03-02',
            comment: '5',
            like: '2',
            select: '2'
        }
    ];

    return (
        <>
        {items.map((list,index) => (<KnwJoinList list={list} key={index} />))}
        </>
    )
}


export default KnwJoinLists;