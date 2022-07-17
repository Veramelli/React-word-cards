import React, { useState } from "react";

import s from "./Cardrow.css";

function Row(props) {
  const [pressed, setPressed] = useState(false);

  const handleChange = () => {
    setPressed(!pressed);
  };

  return (
    <div className={s.wrapper}>
      <div className={s.wordRussian}>{props.word.russian}</div>
      <div className={s.wordEnglish}>{props.word.english}</div>
      <div className={s.wordTranscription}>{props.word.transcription}</div>
      <div className={s.wordTag}>{props.word.tags}</div>
      <div className={s.buttons}>
        <button onClick={handleChange}>Редактировать</button>

        <button>Удалить</button>
      </div>
    </div>
  );
}

export default Row;
