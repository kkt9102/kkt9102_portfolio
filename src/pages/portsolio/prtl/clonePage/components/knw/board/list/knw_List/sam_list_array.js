import React, { useState } from 'react';

import knw from '../../../../../resource/css/knw.module.css';

export const KnwList = ({list}) => {
    const [isFile,setFile] = useState(false);

    const FileAdd = () => {
        isFile = !isFile;
    }
    return(
        <tr>
            <td className={knw.list_check_box}>
                <input type="checkbox" name="list_check_all" id="list_check_all"></input>
                <label htmlFor="list_check_all"></label>
            </td>
            <td>{list.numbers}</td>
            <td className={knw.list_tit}>{list.tit}</td>
            <td className={knw.list_file}>{list.file}</td>
            <td>{list.writer}</td>
            <td>{list.reg_dt}</td>
            <td>{list.comment}</td>
            <td>{list.like}</td>
            <td>{list.view}</td>
        </tr>
    );
}

const KnwSamLists = () => {
    const items = [
        {
            id:1,
            numbers:'30',
            tit: '게시글 제목 영역입니다.',
            file: <i className="xi-paperclip"></i>,
            writer: '김철수',
            reg_dt: '2022-03-10',
            comment: '2',
            like: '1',
            view: '30'
        },
        {
            id:2,
            numbers:'29',
            tit: '게시글 제목 샘플 영역입니다.',
            file: <i className="xi-paperclip"></i>,
            writer: '김군',
            reg_dt: '2022-03-10',
            comment: '0',
            like: '0',
            view: '492'
        },
        {
            id:3,
            numbers:'28',
            tit: '게시글 제목 샘플입니다. text-overflow 처리입니다.',
            file: '',
            writer: '박수지',
            reg_dt: '2022-03-08',
            comment: '2',
            like: '4',
            view: '56'
        },
        {
            id:4,
            numbers:'27',
            tit: '게시글 제목 샘플입니다. text-overflow 처리입니다.',
            file: '',
            writer: '김은희',
            reg_dt: '2022-03-07',
            comment: '40',
            like: '269',
            view: '1,002'
        },
        {
            id:5,
            numbers:'26',
            tit: '게시글 제목 샘플입니다. text-overflow 처리입니다.',
            file: '',
            writer: '박철수',
            reg_dt: '2022-03-06',
            comment: '4',
            like: '2',
            view: '32'
        },
        {
            id:6,
            numbers:'25',
            tit: '게시글 제목영역 샘플을 위한 텍스트입니다. 게시글 제목영역 샘플을 위한 텍스트입니다. ',
            file: <i className="xi-paperclip"></i>,
            writer: '김빛나리',
            reg_dt: '2022-03-04',
            comment: '0',
            like: '12',
            view: '25'
        },
        {
            id:7,
            numbers:'24',
            tit: '게시글 제목영역 샘플을 위한 텍스트입니다. 게시글 제목영역 샘플을 위한 텍스트입니다. ',
            file: <i className="xi-paperclip"></i>,
            writer: '박군',
            reg_dt: '2022-03-04',
            comment: '1',
            like: '129',
            view: '2,928'
        },
        {
            id:8,
            numbers:'23',
            tit: '게시글 제목영역 샘플을 위한 텍스트입니다. 게시글 제목영역 샘플을 위한 텍스트입니다. ',
            file: '',
            writer: '김철수',
            reg_dt: '2022-03-03',
            comment: '95',
            like: '10',
            view: '1,002'
        },
        {
            id:9,
            numbers:'22',
            tit: '게시글 제목영역 샘플을 위한 텍스트입니다. 게시글 제목영역 샘플을 위한 텍스트입니다. ',
            file: '',
            writer: '김은희',
            reg_dt: '2022-03-02',
            comment: '15',
            like: '0',
            view: '112'
        },
        {
            id:10,
            numbers: '21',
            tit: '게시글 제목영역 샘플을 위한 텍스트입니다. 게시글 제목영역 샘플을 위한 텍스트입니다. ',
            file: <i className="xi-paperclip"></i>,
            writer: '김은희',
            reg_dt: '2022-03-02',
            comment: '5',
            like: '2',
            view: '512'
        },
        {
            id:11,
            numbers:'20',
            tit: '게시글 제목 영역입니다.',
            file: '',
            writer: '김철수',
            reg_dt: '2022-03-01',
            comment: '2',
            like: '1',
            view: '30'
        },
        {
            id:12,
            numbers:'19',
            tit: '게시글 제목 샘플 영역입니다.',
            file: '',
            writer: '김군',
            reg_dt: '2022-02-27',
            comment: '0',
            like: '0',
            view: '492'
        },
        {
            id:13,
            numbers:'18',
            tit: '게시글 제목 샘플입니다. text-overflow 처리입니다.',
            file: <i className="xi-paperclip"></i>,
            writer: '박수지',
            reg_dt: '2022-02-25',
            comment: '2',
            like: '4',
            view: '56'
        },
        {
            id:14,
            numbers:'17',
            tit: '게시글 제목 샘플입니다. text-overflow 처리입니다.',
            file: '',
            writer: '김은희',
            reg_dt: '2022-02-25',
            comment: '40',
            like: '269',
            view: '1,002'
        },
        {
            id:15,
            numbers:'16',
            tit: '게시글 제목 샘플입니다. text-overflow 처리입니다.',
            file: '',
            writer: '박철수',
            reg_dt: '2022-02-24',
            comment: '4',
            like: '2',
            view: '32'
        },
        {
            id:16,
            numbers:'15',
            tit: '게시글 제목영역 샘플을 위한 텍스트입니다. 게시글 제목영역 샘플을 위한 텍스트입니다. ',
            file: <i className="xi-paperclip"></i>,
            writer: '김빛나리',
            reg_dt: '2022-02-24',
            comment: '0',
            like: '12',
            view: '25'
        },
        {
            id:17,
            numbers:'14',
            tit: '게시글 제목영역 샘플을 위한 텍스트입니다. 게시글 제목영역 샘플을 위한 텍스트입니다. ',
            file: <i className="xi-paperclip"></i>,
            writer: '박군',
            reg_dt: '2022-02-24',
            comment: '1',
            like: '129',
            view: '2,928'
        },
        {
            id:18,
            numbers:'13',
            tit: '게시글 제목영역 샘플을 위한 텍스트입니다. 게시글 제목영역 샘플을 위한 텍스트입니다. ',
            file: '',
            writer: '김철수',
            reg_dt: '2022-023-23',
            comment: '95',
            like: '10',
            view: '1,002'
        },
        {
            id:19,
            numbers:'12',
            tit: '게시글 제목영역 샘플을 위한 텍스트입니다. 게시글 제목영역 샘플을 위한 텍스트입니다. ',
            file: '',
            writer: '김은희',
            reg_dt: '2022-03-02',
            comment: '15',
            like: '0',
            view: '112'
        },
        {
            id:20,
            numbers: '11',
            tit: '게시글 제목영역 샘플을 위한 텍스트입니다. 게시글 제목영역 샘플을 위한 텍스트입니다. ',
            file: <i className="xi-paperclip"></i>,
            writer: '김은희',
            reg_dt: '2022-02-12',
            comment: '5',
            like: '2',
            view: '512'
        }
    ];

    return (
        <>
        {items.map((list,index) => (<KnwList list={list} key={index} />))}
        </>
    )
}


export default KnwSamLists;