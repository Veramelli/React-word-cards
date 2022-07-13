import React from "react";
import s from "./Cardrow.css";

function Row(props) {
  return (
    <div className={s.wrapper}>
      <div>{props.word.russian}</div>
      <div>{props.word.english}</div>
      <div>{props.word.transcription}</div>
      <div>{props.word.tags}</div>
      <div>
        <button>Редактировать</button>
        <button>Удалить</button>
      </div>
    </div>
  );
}

export default Row;
