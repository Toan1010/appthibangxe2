import styles from "./Result.module.scss";
import classNames from "classnames/bind";

import Answer from "./Answer";
import Point from "./Point";

const cx = classNames.bind(styles);

function Result({listQuestions}) {
  return (
    <div className={cx("container")}>
      <Answer listQuestions={listQuestions}></Answer>
      <Point listQuestions={listQuestions}></Point>
    </div>
  );
}

export default Result;
