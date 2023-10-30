import { useState, useEffect } from "react";

import styles from "./Ontest.module.scss";
import classNames from "classnames/bind";

import Question from "./Question";
import Time from "./Time";

const cx = classNames.bind(styles);

function Ontest({ mode, listQuests, onEnd }) {

  const [current, setCurrent] = useState(0);
  const [answer, setAnswer] = useState({});
  console.log('onTest');
  useEffect(() => {
    localStorage.setItem("answer", JSON.stringify({}));
  }, []);

  const optionChange = (e, quest) => {
    console.log(quest);
    setAnswer(() => {
      const newAnswers = { ...answer };
      newAnswers[quest] = e.target.value;
      localStorage.setItem("answer", JSON.stringify(newAnswers));
      return newAnswers;
    });
  };
  console.log(current);
  const changeCurrent = (a) => {
    setCurrent(a-1);
  };
  const prevCurrent = () => {
    setCurrent((prev) => prev - 1);
  };
  const nextCurrent = () => {
    setCurrent((prev) => prev + 1);
  };
  return (
    <div className={cx("container")}>
      <Question
        quest={listQuests[current]}
        now={current}
        answers={answer}
        prev={prevCurrent}
        next={nextCurrent}
        optionChange={optionChange}
      ></Question>
      <Time initialTime={mode} onTimeup={onEnd} moveTo={changeCurrent}></Time>
    </div>
  );
}

export default Ontest;
