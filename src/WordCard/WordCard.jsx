import React, {useState} from "react";

import s from "./WordCard.css";

function WordCard() {

const [pressed, setPressed] = useState(false);


const handleChange = () =>{
    setPressed(!pressed);
   }

  return (
    <div className={s.wrapper}>
      <div className={s.english}>Car</div>
      <div className={s.transcription}>[kɑ:]</div>
      {pressed && <div className={s.russian}>
        Автомобиль
      </div>}
      <button onClick={handleChange} className={s.check__button}>Проверить</button>
    </div>
  );
}

export default WordCard;
