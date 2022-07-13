import React from "react";
import s from "./CardList.css";
import Row from "./Cardrow";
import words from "../words.json";

function CardList() {
  return (
    <div className={s.wrapper}>
      <div className={s.table}>
        <div>
          <input type="text"></input>
        </div>
        <div>
          <input type="text"></input>
        </div>
        <div>
          <input type="text"></input>
        </div>
        <div>
          <input type="text"></input>
        </div>
        <div>
          <button>Сохранить</button>
          <button>Редактировать</button>
          <button>Удалить</button>
        </div>
      </div>
      {words.map((el) => (
        <Row word={el} />
      ))}
    </div>
  );
}

export default CardList;
