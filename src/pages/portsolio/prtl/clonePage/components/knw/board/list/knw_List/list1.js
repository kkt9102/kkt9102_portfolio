import React from 'react';

import knw from '../../../../../resource/css/knw.module.css';

const List1 = () => {
    return(
        <>
            <tbody>
                <tr>
                    <td className={knw.list_check_box}>
                        <input type="checkbox" name="list_check_all" id="list_check_all"></input>
                        <label for="list_check_all"></label>
                    </td>
                    <td className={knw.list_mark}>
                        <input type="checkbox" id="list_mark" name="list_mark"></input>
                        <label for="list_mark">☆</label>
                    </td>
                    <td>39</td>
                    <td className={knw.list_tit}></td>
                    <td className={knw.file}><i className='xi-paperclip'></i></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className={knw.list_check_box}>
                        <input type="checkbox" name="list_check_all" id="list_check_all"></input>
                        <label for="list_check_all"></label>
                    </td>
                    <td>★</td>
                    <td>번호</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </>
    )
}

export default List1;