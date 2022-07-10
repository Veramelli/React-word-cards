import React from "react";
import s from "./CardList.css"

function CardList(){
    return(
        <div className={s.wrapper}>
            <table>
            <tr>
                    <td>
                        <div>#</div>
                    </td>
                    <td><div>Слово</div></td>
                    <td><div>Перевод</div></td>
                    <td><div>Транскрипция</div></td>
                    <td>
                    </td>
                </tr>
                <tr>
                    <td>
                        1
                    </td>
                    <td><div><input type='text'></input></div></td>
                    <td><div><input type='text'></input></div></td>
                    <td><div><input type='text'></input></div></td>
                    <td>
                        <button>Сохранить</button>
                        <button>Редактировать</button>
                        <button>Удалить</button>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default CardList;